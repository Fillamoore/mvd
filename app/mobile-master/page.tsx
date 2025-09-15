// app/mobile-master/page.tsx - UPDATED NAME
import MasterView from '@/components/MasterView';
import MobileFooter from '@/components/MobileFooter';

export default function MobileMasterPage() {
  return (
    <div className="h-screen flex flex-col md:hidden">
      <div className="flex-1 overflow-hidden">
        <MasterView isMobile={true} />
      </div>
      <MobileFooter />
    </div>
  );
}