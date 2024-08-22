import Image from 'next/image'
import { Search, Menu } from 'lucide-react'

export default function Header() {
  const menuItems = [
    { name: "쿠팡플레이", icon: "https://image7.coupangcdn.com/image/coupang/common/coupang_play_logo_2024@3x.png" },
    { name: "로켓배송", icon: "https://image10.coupangcdn.com/image/coupang/rds/logo/xxhdpi/logo_rocket_symbol_large.png" },
    { name: "로켓프레시", icon: "https://image9.coupangcdn.com/image/coupang/common/pc_header_rocket_fresh_1x.png" },
    { name: "2024 추석", icon: "https://image6.coupangcdn.com/image/coupang/home/icons/CSK/2024/CSK.png" },
    { name: "비즈 플러스", icon: "https://image6.coupangcdn.com/image/coupang/common/logoBizonlyBrown.png" },
    { name: "로켓직구", icon: "https://image6.coupangcdn.com/image/coupang/home/icons/Overseas.png" },
    { name: "골든박스", icon: "" },
    { name: "와우회원할인", icon: "https://image7.coupangcdn.com/image/coupang/home/icons/omp_pc_shortcut_20240510.png" },
    { name: "이벤트/쿠폰", icon: "" },
  ]

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex flex-col items-center bg-blue-600 p-4 space-y-2">
              <Menu className="text-white text-border" />
              <span className="text-white text-xs whitespace-nowrap">카테고리</span>
          </div>
          <Image src="https://image7.coupangcdn.com/image/coupang/common/logo_coupang_w350.png" alt="Coupang Logo" width={120} height={40} />
        </div>
        <div className="flex-grow mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="찾고 싶은 상품을 검색해보세요!"
              className="w-full p-2 pl-10 border border-blue-300 rounded-md"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center flex-col mr-4">
            <img src="https://static.coupangcdn.com/image/coupang/common/pc_header_img_sprite_new_gnb.svg#person" alt="" width={30} height={30} className="mb-1" />
            <span className = "text-xs whitespace-nowrap"> 마이 쿠팡 </span>
          </div>
          <div className="flex items-center flex-col">
            <img src="https://static.coupangcdn.com/image/coupang/common/pc_header_img_sprite_new_gnb.svg#cart" alt="" width={30} height={30} className="mb-1" />
            <span className = "text-xs whitespace-nowrap"> 장바구니 </span>
          </div>
        </div>
      </div>
      <nav className="container mx-auto px-4 py-4 flex space-x-4 text-sm overflow-x-auto">
        {menuItems.map((item, index) => (
          <a key={index} href="#" className="flex items-center text-blue-600 whitespace-nowrap">
            {item.icon && item.icon !== "" && (
              <div className="relative w-5 h-5 mr-1">
                <Image src={item.icon} alt="" fill />
              </div>
            )}
            <span>{item.name}</span>
          </a>
        ))}
      </nav>
    </header>
  )
}