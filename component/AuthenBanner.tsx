import { Image } from '@mantine/core'
import React from 'react'

export default function AuthenBanner() {
  return (
    <div className="mx-auto desktop:w-1/2  mar-Baner">
        <div className="banner-item">
            <div className="bor-logo-banner"> 
                <Image width={'100%'} height={'100%'} src="https://chuanperfume.com/wp-content/uploads/icon-mien-phi-giao-hang.png" alt="abc" />

            </div>
            <div>
                <div className="item-txt-banner">
                    
                <span>Free Shipping</span>
                <span>Miễn phí vận chuyển</span>
                </div>
            </div>

        </div>
        <div className="banner-item">
            <div className="bor-logo-banner"> 
                <Image  width={'100%'} height={'100%'}src="https://chuanperfume.com/wp-content/uploads/icon-original-100.png" alt="abc" />

            </div>
            <div>
                <div className="item-txt-banner">
                    
                <span>Chuẩn Authenic</span>
                <span>Cam kết chính hãng 100%</span>
                </div>
            </div>

        </div>
        <div className="banner-item">
            <div className="bor-logo-banner"> 
                <Image width={'100%'} height={'100%'} src="https://chuanperfume.com/wp-content/uploads/icon-hoan-tien.png" alt="abc" />

            </div>
            <div>
                <div className="item-txt-banner">
                    
                <span>Money Guarantee</span>
                <span>Đổi trả và hoàn tiền</span>
                </div>
            </div>

        </div>
        <div className="banner-item">
            <div className="bor-logo-banner"> 
                <Image width={'100%'} height={'100%'} src="https://chuanperfume.com/wp-content/uploads/icon-voucher.png" alt="abc" />

            </div>
            <div>
                <div className="item-txt-banner">
                    
                <span>Ưu Đãi Nhiều</span>
                <span>Giá tốt so với thị trường</span>
                </div>
            </div>

        </div>
    </div>
  )
}
