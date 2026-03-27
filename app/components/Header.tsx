import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      {/* トップアクセントバー */}
      <div style={{ 
        background: 'linear-gradient(90deg, #fcc419 0%, #fab005 30%, #f59f00 60%, #fcc419 100%)', 
        height: '3px' 
      }}></div>
      
      {/* メインヘッダー */}
      <div style={{ 
        background: 'linear-gradient(135deg, #050d1a 0%, #0f1f3d 25%, #1a3358 50%, #1e3a5f 75%, #0f1f3d 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.06)'
      }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              {/* ロゴアイコン */}
              <div style={{
                background: 'linear-gradient(135deg, #fcc419, #f59f00)',
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 12px rgba(252,196,25,0.3)'
              }}>
                <span style={{ fontSize: '18px', fontWeight: 900, color: '#0a1628' }}>¥</span>
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                  <Link href="/">
                    <span style={{ color: '#fcc419' }}>先払い買取</span>比較・おすすめ業者ガイド
                  </Link>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
