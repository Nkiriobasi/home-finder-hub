interface _geoloc {
    lat:number
    lng:number
}
interface geography {
    lat:number
    lng:number
}
interface _highlightResult {
    name: {
        value:string
        matchLevel:string
        fullyHighlighted:boolean
    }
    externalID: {
        value:string
        matchLevel:string
        matchedWords:[]

    }
    hierarchy:[]

}
interface Hits {
    id:number
    name:string
    name_l1:string
    externalID:string
    slug:string
    slug_l1:string
    _geoloc: _geoloc
    geography: geography
    level:number
    hierarchy:[]
    adCount:number
    aliases: []
    type:null
    hasBuilding:boolean
    trackID:string
    roles:boolean
    objectID:string
    _highlightResult: _highlightResult

}

interface PropertyList {
    hits:Hits[]
    nbHits:number
    page:number
    nbPages:number
    hitsPerPage:number
    exhaustiveNbHits:boolean
    exhaustiveTypo:boolean
    query:string
    params:string
    processingTimeMS:number
}