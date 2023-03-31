let demandArray = [{"demand_id":"land-back","demand_no":0,"en":{"title":"Land Back"},"fr":{"title":"La restitution des terres ancestrales"}},{"demand_id":"land-housing","demand_no":1,"en":{"title":"On the Land Housing"},"fr":{"title":"Des logements sur le territoire"}},{"demand_id":"home-building-lodges","demand_no":2,"en":{"title":"First Nations Home Building Lodges"},"fr":{"title":"Pavillons pour la construction d’habitations au sein des Premières Nations"}},{"demand_id":"reparative-architecture","demand_no":3,"en":{"title":"Reparative Architecture"},"fr":{"title":"Une architecture réparatrice"}},{"demand_id":"gentrification-tax","demand_no":4,"en":{"title":"A Gentrification Tax"},"fr":{"title":"Une taxe sur l’embourgeoisement"}},{"demand_id":"surplus-properties-housing","demand_no":5,"en":{"title":"Surplus Properties for Housing"},"fr":{"title":"Des propriétés excédentaires pour le logement "}},{"demand_id":"intentional-communities-unhoused-people","demand_no":6,"en":{"title":"Intentional Communities for Unhoused People"},"fr":{"title":"Des communautés intentionnelles pour les personnes sans logement"}},{"demand_id":"collective-ownership","demand_no":7,"en":{"title":"Collective Ownership"},"fr":{"title":"La propriété collective"}},{"demand_id":"mutual-aid-housing","demand_no":8,"en":{"title":"Mutual Aid Housing"},"fr":{"title":"Habitat solidaire"}},{"demand_id":"ambient-ecosystems-commons","demand_no":9,"en":{"title":"Ambient Ecosystems Commons"},"fr":{"title":"Écosystèmes ambiants communs"}}]

export function reviewNumber(num) {
    if (num > 0) {
      return "Positive";
    } else if (num < 0) {
      return "Negative";
    } else {
      return "Zero";
    }
  }