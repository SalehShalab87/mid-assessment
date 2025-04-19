export interface Unversity {
  alpha_two_code: string;
  web_pages: web_pageRespons;
  domains: domainsRespons;
  'state-province': any;
  country: string;
  name: string;
}

export interface web_pageRespons {
  link: string;
}

export interface domainsRespons {
  domain: string;
}
