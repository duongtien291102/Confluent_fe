import { useState, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import MainLayoutView from '../../views/all/MainLayoutView';

interface MainLayoutProps {
    children: ReactNode;
    onLogout?: () => void;
    onAddJob?: () => void;
    onAddProject?: () => void;
    onBack?: () => void;
    onTimeline?: () => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, onLogout, onAddJob, onAddProject, onBack, onTimeline }) => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const location = useLocation();

    const getPageTitle = (pathname: string) => {
        if (pathname.match(/^\/job\/[^/]+$/)) {
            return 'Chi tiết công việc';
        }
        if (pathname === '/job/timeline') {
            return 'Dòng thời gian';
        }
        if (pathname.includes('/job')) {
            return 'Danh sách công việc';
        }
        return 'Trang chủ';
    };

    const isJobPage = location.pathname === '/job';
    const isJobDetailPage = location.pathname.match(/^\/job\/[^/]+$/);
    const isTimelinePage = location.pathname === '/job/timeline';

    return (
        <MainLayoutView
            isSidebarCollapsed={isSidebarCollapsed}
            onSidebarToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            onLogout={onLogout || (() => { })}
            onAddJob={onAddJob || (() => { })}
            onAddProject={onAddProject || (() => { })}
            onBack={onBack}
            onTimeline={onTimeline}
            isJobPage={isJobPage}
            showBackButton={!!(isJobDetailPage || isTimelinePage)}
            title={getPageTitle(location.pathname)}
        >
            {children}
        </MainLayoutView>
    );
};

export default MainLayout;
