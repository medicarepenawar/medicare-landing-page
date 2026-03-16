import axios, { AxiosError } from "axios";
import type { ApiError } from "../types/api";
import type { Root } from "../types/landingApi";

const LANDING_PAGE_ENDPOINT = "/api/landing-page";

class LandingService {
  async getLandingPageData(): Promise<Root> {
    try {
      const response = await axios.get<Root>(LANDING_PAGE_ENDPOINT);

      if (typeof response.data !== "object" || response.data === null || !("success" in response.data)) {
        throw new Error("Invalid API response format from landing page endpoint.");
      }

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
