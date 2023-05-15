import { useEffect, useState } from 'react'
import { noop } from '../utils/general'

/**
 * This callback is called after each image is loaded.
 * 
 * @callback imageLoadCallback
 * @param src - the source of the loaded image
 * @param categoryKey - the category the loaded image
 */

/**
 * This callback is called after an error occured during image load.
 * 
 * @callback imageErrorCallback
 * @param {string} src - the source of the loaded image
 * @param {string} categoryKey - the category the loaded image
 * @param {Event} err - the error event of the image load
 */

/**
 * This callback is called after a category is loaded (even if certain image loads encountered errors)
 * 
 * @callback categoryLoadCallback
 * @param {string} categoryKey - the key of the loaded category
 * @param {string[]} categorySrcs - the sources within the loaded category
 * @param {Promise[]} preloadPromises - the fulfilled/rejecteed promises of each image load 
 */

/**
 * This callback is called after a category is loaded (even if certain image loads encountered errors)
 * 
 * @callback categoryLoadCallback
 * @param {string} categoryKey - the key of the loaded category
 * @param {string[]} categorySrcs - the sources within the loaded category
 * @param {Promise[]} preloadPromises - the fulfilled/rejecteed promises of each image load 
 */

/**
 * This callback is called after all categories are loaded
 * 
 * @callback allImageLoadCallback
 */

/**
 * @typedef {Object} lists
 * @property {{[key: string]: string[]}} [imageList]
 * @property {string[]} [priorityList]
 */



/**
 * 
 * @param {lists} lists - optional preloaded lists of images and priority
 * 
 * @param {Object} config - conditional callbacks on image load events.
 * @param {imageLoadCallback} [config.onImageLoad]
 * @param {imageErrorCallback} [config.onImageError]
 * @param {categoryLoadCallback} [config.onCategoryLoad]
 * @param {allImageLoadCallback} [config.onAllImageLoad]
 * @description
 * The preload function is made with priority loading in mind.
 * The `lists` argument takes two properties: a map of image sources divided into categories and
 * an array containing the name of the categories in loading order.
 * 
 * For example: 
 * ```
 * usePreload({ 
 *   imageList: { 
 *     main: ['1.jpg'], 
 *     secondary: ['b.png', '3.jpeg'] 
 *   }, ['main', 'secondary']}
 * )
 * ```
 * **We need both the image list and priority list as objects aren't ordered.**
 * 
 * With this example, all the images in the `"main"` array will be loaded first before the `"secondary"` category
 * 
 * With delayed data fetching, the initial invocation of `usePreload` can be called with `null`, and use the `setLists` function
 * it returns to later set the data.
 * 
 * ```
 * const setLists = usePreload()
 * const lists = myFetchDataFunction()
 * setLists(lists)
 * ```
 * 
 * The second argument `config` provides a list of possible event callbacks, if needed.
 */


const usePreload = (lists = {}, config = {}) => {
  const { imageList = null, priorityList = null } = lists
  const {
    onImageLoad = noop,
    onImageError = noop,
    onCategoryLoad = noop,
    onAllImageLoad = noop
  } = config

  const [_imageList, setImageList] = useState(imageList)
  const [_priorityList, setPriorityList] = useState(priorityList)

  const preloadImage = (src, categoryKey, onLoad = noop, onError = noop) =>
    new Promise(res => {
      const img = new Image()
      img.onload = () => {
        onLoad(src, categoryKey)
        res()
      }
      img.onerror = err => {
        console.error(err)
        onError(src, categoryKey, err)
        res()
      }
      img.src = src
    })

  function preloadCategory(priorityIndex = 0) {
    const categoryKey = _priorityList[priorityIndex]
    const categorySrcs = _imageList[categoryKey]

    const preloadPromises = categorySrcs.map(src => preloadImage(src, categoryKey, onImageLoad, onImageError))
    Promise.all(preloadPromises).then(() => {
      onCategoryLoad(categoryKey, categorySrcs, preloadPromises)
      if (priorityIndex < _priorityList.length - 1)
        preloadCategory(priorityIndex + 1)
      else onAllImageLoad()
    })
  }

  useEffect(() => {
    if (
      !_imageList ||
      !_priorityList ||
      !_imageList.length ||
      !_priorityList.length
    ) return noop
    preloadCategory()
  }, [_imageList, _priorityList])

  /**
   * @param {lists} lists - preloaded lists of images and priority
   */
  const setLists = (lists = {}) => {
    const { imageList, priorityList } = lists
    setImageList(imageList)
    setPriorityList(priorityList)
  }

  return setLists
}

export default usePreload