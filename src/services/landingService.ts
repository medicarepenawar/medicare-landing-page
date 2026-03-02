import axios, { AxiosError } from "axios";
import { BASE_API_URL } from "../constants/constant";
import type { ApiError, LandingPageResponse } from "../types/api";

class LandingService {
  private baseURL: string;

  constructor() {
    this.baseURL = BASE_API_URL;
  }

  async getLandingPageData(): Promise<LandingPageResponse> {
    try {
      const response = await axios.get<LandingPageResponse>(`${this.baseURL}/landing-page`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private handleError(error: unknown): Error {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>;

      if (axiosError.response) {
        return new Error(axiosError.response.data?.message || "Failed to fetch landing page data");
      }

      if (axiosError.request) {
        return new Error("Network error. Please check your internet connection.");
      }
    }

    if (error instanceof Error) {
      return error;
    }

    return new Error("An unexpected error occurred while fetching landing page data.");
  }
}

export const landingService = new LandingService();
