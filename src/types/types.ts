export interface Avion {
    numeroDeSerie: string;
    modele: String;
    dateMiseEnService: String;
    statut: String;
}

export interface Maintenance {
    id?: number;
    dateDeMaintenance: String;
    description: String;
    statut: String;
}

export interface Technicien {
    id?: number;
    nom: String;
    prenom: String;
    specialite: String;
    dateEmbauche: String;
}