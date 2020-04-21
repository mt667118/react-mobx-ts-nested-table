
export const IDENTIFICATION_NUMBER = 'Identification number';

export interface Person {
  data: { [key: string]: string };
  kids: PersonKids;
}

export interface PersonKids {
  has_relatives?: HasRelatives;
}

export interface HasRelatives {
  records: HasRelativesRecord[];
}

export interface HasRelativesRecord {
  data: { [key: string]: string };
  kids: RelativeKids;
}

export interface RelativeData {
  relativeID: string;
  patientID: string;
  isAlive: string;
  frequencyOfVisits: string;
}

export interface RelativeKids {
  has_phone?: HasPhone;
}

export interface HasPhone {
  records: HasPhoneRecord[];
}

export interface HasPhoneRecord {
  data: { [key: string]: string };
  kids: {};
}

export interface HasPhoneRecordData {
  phoneID: string;
  idOfTheRelative: string;
  phone: string;
}
