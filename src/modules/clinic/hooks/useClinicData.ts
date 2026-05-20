import { useParams } from "react-router-dom";
import { getClinicBySlug, type ClinicData } from "../constants/clinicData";

export const useClinicData = (): { clinic: ClinicData | null; slug: string } => {
  const { slug } = useParams<{ slug: string }>();
  const clinic = slug ? getClinicBySlug(slug) ?? null : null;
  return { clinic, slug: slug || "" };
};
