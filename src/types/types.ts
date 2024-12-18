export interface Avion {
    numeroDeSerie: string;
    modele: String;
    dateMiseEnService: String;
    statut: String;
}

export interface Maintenance {
    dateDeMaintenance: String;
    description: String;
    statut: String;
}

export interface Technicien {
    nom: String;
    prenom: String;
    specialite: String;
    dateEmbauche: String;
}