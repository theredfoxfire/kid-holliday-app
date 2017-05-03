//@flow

export type ContactUs = Office;

export type OfficeData = {
  id: string;
  office: string;
  address: string;
  phone?: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type Office = {
  mainOffice: OfficeData;
  branchOffices?: Array<OfficeData>;
};

export type EmailMessage = {
  name: string;
  email: string;
  phone: string;
  message: string;
};
