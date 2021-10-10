export interface Result {
	domain: string;
	url: string;
	isSsl: string;
}

export interface ApiResponse {
	hostname: string;
	url: string;
}

export interface ErrorIResolvedValues {
  valid: boolean;
  validFrom: string;
  validTo: string;
  daysRemaining: number;
  validFor: string[];
}