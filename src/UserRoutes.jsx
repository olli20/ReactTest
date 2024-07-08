import {lazy, Suspense} from "react";
import {Routes, Route} from "react-router-dom";

import Loader from "./common/components/Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const BlogPage = lazy(() => import("./pages/BlogPage/BlogPage"));
const BlogEnteryPage = lazy(() => import("./pages/BlogEnteryPage/BlogEnteryPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage/ProjectsPage"));
const ProjectDetailsPage = lazy(() => import("./pages/ProjectDetailsPage/ProjectDetailsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const UserRoutes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:blogId" element={<BlogEnteryPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    )
}

export default UserRoutes;