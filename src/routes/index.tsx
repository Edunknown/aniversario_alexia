import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../components/HomePage";
import { LetterPage } from "../components/LetterPage";
import { HOME_ROUTE, LETTER_ROUTE } from "../constants/routes";

export function AppRoutes() {
	return (
		<Routes>
			<Route path={HOME_ROUTE} element={<HomePage />} />
			<Route path={LETTER_ROUTE} element={<LetterPage />} />
			<Route path="*" element={<Navigate to={HOME_ROUTE} replace />} />
		</Routes>
	);
}
