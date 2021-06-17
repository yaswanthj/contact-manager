export interface Contact {
    id: number,
    firstName: string,
    lastName: string,
    contacts: {
      type: string,
      number: number
    } [],
    isFavourite: boolean

}
