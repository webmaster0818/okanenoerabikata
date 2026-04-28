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

      {/* ナビゲーションバー */}
      <div style={{
        background: 'linear-gradient(135deg, #1a3358, #243f6b)',
        borderBottom: '1px solid rgba(255,255,255,0.04)'
      }}>
        <div className="container mx-auto px-4">
          <nav className="py-2 overflow-x-auto">
            <ul className="flex gap-1 text-sm whitespace-nowrap">
              <li>
                <Link href="/" className="px-3 md:px-4 py-1.5 rounded-md text-gray-300 hover:text-white hover:bg-white/5 font-medium text-xs md:text-sm transition-colors">
                  トップ
                </Link>
              </li>
              <li>
                <Link href="/comparison"
                  className="px-3 md:px-4 py-1.5 rounded-md text-gray-300 hover:text-white hover:bg-white/5 font-medium text-xs md:text-sm transition-colors">
                  業者比較
                </Link>
              </li>
              <li>
                <Link href="/articles"
                  className="px-3 md:px-4 py-1.5 rounded-md text-gray-300 hover:text-white hover:bg-white/5 font-medium text-xs md:text-sm transition-colors">
                  記事一覧
                </Link>
              </li>
              <li>
                <Link href="/articles/what-is-advance-purchase"
                  className="px-3 md:px-4 py-1.5 rounded-md text-gray-300 hover:text-white hover:bg-white/5 font-medium text-xs md:text-sm transition-colors">
                  先払い買取とは
                </Link>
              </li>
              <li>
                <Link href="/faq"
                  className="px-3 md:px-4 py-1.5 rounded-md text-gray-300 hover:text-white hover:bg-white/5 font-medium text-xs md:text-sm transition-colors">
                  よくある質問
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* PR・景表法対応バー + 更新日 */}
      <div className="bg-yellow-50 py-0.5 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <span className="text-[10px] text-gray-400">最終更新日: 2026年4月28日</span>
          <span className="text-[10px] text-gray-500">PRを含みます</span>
        </div>
      </div>
    </header>
  )
}
