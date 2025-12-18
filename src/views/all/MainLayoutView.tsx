import type { ReactNode } from 'react';

interface MainLayoutViewProps {
    children: ReactNode;
    isSidebarCollapsed: boolean;
    onSidebarToggle: () => void;
    onLogout: () => void;
    onAddJob: () => void;
    onAddProject: () => void;
    onBack?: () => void;
    onTimeline?: () => void;
    isJobPage: boolean;
    showBackButton?: boolean;
    title?: string;
}

const MainLayoutView: React.FC<MainLayoutViewProps> = ({
    children,
    isSidebarCollapsed,
    onSidebarToggle,
    onLogout,
    onAddJob,
    onAddProject,
    onBack,
    onTimeline,
    isJobPage,
    showBackButton = false,
    title,
}) => {
    return (
        <div className="flex min-h-screen bg-slate-50">
            <SidebarContainer isCollapsed={isSidebarCollapsed} onToggle={onSidebarToggle} onLogout={onLogout} />

            <div className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${isSidebarCollapsed ? 'ml-[70px]' : 'ml-[250px]'}`}>
                <Header
                    title={title}
                    onBack={onBack}
                    onAddJob={onAddJob}
                    onAddProject={onAddProject}
                    onTimeline={onTimeline}
                    isJobPage={isJobPage}
                    showBackButton={showBackButton}
                />
                <main className="flex-1 p-6 overflow-y-auto">{children}</main>
            </div>
        </div>
    );
};

import { Sidebar as SidebarContainer } from '../../components/all';
import Header from '../../components/all/Header';

export default MainLayoutView;
