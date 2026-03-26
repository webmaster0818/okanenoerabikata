import Link from 'next/link'

export default function Header() {
  return (
    <>
      {/* 黄色いトップバー */}
      <div className="w-full h-1 bg-yellow-400"></div>
      
      {/* メインヘッダー */}
      <header className="bg-gradient-to-b from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-6">
            {/* ¥ アイコン */}
            <div className="w-24 h-24 bg-yellow-500 rounded-2xl flex items-center justify-center text-slate-900 text-5xl font-bold">
              ¥
            </div>
            
            {/* サイト名とサブタイトル */}
            <div>
              <h1 className="text-4xl font-bold mb-2">お金の選び方研究所</h1>
              <p className="text-slate-400 text-sm">MONEY CHOICE LAB — 先払い買取比較メディア</p>
            </div>
          </div>
          
          {/* ナビゲーション */}
          <nav className="flex gap-4">
            <Link 
              href="/" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition-colors"
            >
              トップ
            </Link>
            <Link 
              href="/comparison" 
              className="px-8 py-3 hover:bg-slate-700 rounded-lg font-bold transition-colors"
            >
              業者比較
            </Link>
            <Link 
              href="/articles/what-is-advance-purchase" 
              className="px-8 py-3 hover:bg-slate-700 rounded-lg font-bold transition-colors"
            >
              先払い買取とは
            </Link>
            <Link 
              href="/faq" 
              className="px-8 py-3 hover:bg-slate-700 rounded-lg font-bold transition-colors"
            >
              よくある質問
            </Link>
          </nav>
        </div>
      </header>
    </>
  )
}
