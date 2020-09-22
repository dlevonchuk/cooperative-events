export type CreateEventDto = {
  name: string;
  description?: string;
};

export type UpdateEventDto = {
  id: number;
  name: string;
  description: string;
};

export type JoinToEventDto = {
  personId: number;
  eventId: number;
};

export type CreatePersonDto = {
  name: string;
};

export type UpdatePersonDto = {
  id: number;
  name: string;
};
