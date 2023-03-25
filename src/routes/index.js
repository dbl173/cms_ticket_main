import TrangChu from '~/pages/TrangChu';
import QuanLyVe from '~/pages/QuanLyVe';
import DoiSoatVe from '~/pages/DoiSoatVe';
import DanhSachSuKien from '~/pages/DanhSachSuKien';
import QuanLyThietBi from '~/pages/QuanLyThietBi';
import CaiDat from '~/pages/CaiDat';
import GoiDichVu from '~/pages/GoiDichVu';
// Public
const publicRoutes = [
    { path: '/', component: TrangChu },
    { path: '/quanlyve', component: QuanLyVe },
    { path: '/doisoatve', component: DoiSoatVe },
    { path: '/danhsachsukien', component: DanhSachSuKien },
    { path: '/quanlythietbi', component: QuanLyThietBi },
    { path: '/caidat', component: CaiDat },
    { path: '/goidichvu', component: GoiDichVu },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
