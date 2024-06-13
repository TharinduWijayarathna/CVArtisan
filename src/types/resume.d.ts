export interface Section {
    title: string;
    content: string;
  }
  
  export interface Resume {
    personalInfo: {
      name: string;
      email: string;
      phone: string;
    };
    sections: Section[];
  }
  