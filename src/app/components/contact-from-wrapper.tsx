// ContactFormWrapper.tsx
import { useTranslations } from "next-intl";
import ContactForm from "./contact-form";

export default function ContactFormWrapper() {
	const trHubungikamiPage = useTranslations("HubungikamiPage");

	const translations = {
		formName: trHubungikamiPage("formName"),
		namePlaceholder: trHubungikamiPage("namePlaceholder"),
		emailPlaceholder: trHubungikamiPage("emailPlaceholder"),
		phonePlaceholder: trHubungikamiPage("phonePlaceholder"),
		messagePlaceholder: trHubungikamiPage("messagePlaceholder"),
		submit: trHubungikamiPage("submit"),
		submitMobile: trHubungikamiPage("submitMobile"),
		toastSuccess: trHubungikamiPage("toastSuccess"),
		toastError: trHubungikamiPage("toastError"),
	};

	return <ContactForm translations={translations} />;
}
