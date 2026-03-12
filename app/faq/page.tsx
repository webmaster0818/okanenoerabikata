import Link from 'next/link'

const faqs = [
  {
    q: '先払い買取とはどのような仕組みですか？',
    a: '先払い買取とは、売却を希望する商品について査定を受け、商品を引き渡す前にその査定額を受け取ることができる売買サービスです。利用者は後日、契約内容に従って商品を発送し、業者が商品を受領することで取引が完了します。'
  },
  {
    q: '先払い買取は法律的に問題ありませんか？',
    a: '先払い買取の仕組みは商品の売買ですが、方式によっては金銭の「貸付」とみなされ、違法になる可能性もあります。悪徳業者が先払い買取の仕組みを悪用しているケースもあるため、利用前に契約内容や条件をよく確認することが重要です。'
  },
  {
    q: '適法な先払い買取と違法な先払い買取の違いは何ですか？',
    a: '適法な先払い買取サービスは、商品の売買を前提に、契約内容や発送義務が明確に定められているのが通常です。一方、違法な先払い買取サービスは、商品の受け渡しを前提とせず、後から高額なキャンセル料や違約金を請求するなど、実態が「貸付」と判断される方式です。'
  },
  {
    q: 'クレジットカードを持っていなくても利用できますか？',
    a: 'はい、利用可能です。先払い買取サービスは商品の売買なので、クレジットカードの有無にかかわらず利用することが可能です。クレジットカードを持っていない人や、クレジットカードの利用に抵抗がある人も選択肢の一つとして検討できます。'
  },
  {
    q: '先払い買取は即日現金を受け取れますか？',
    a: '支払いを「最短即日」などとうたっている先払い買取業者は多く、実際に申し込みの当日に代金が振り込まれるケースもあるようです。しかし、あくまでも「最短」なので、時間帯によって、あるいは業者によっては振り込みが翌日以降になる場合もあります。'
  },
  {
    q: 'どのような商品が買取対象になりますか？',
    a: '買取対象の商品は業者によって異なりますが、一般的には商品券（全国百貨店共通商品券）、ギフトカード（JCBギフトカード、VJAギフトカードなど）、収入印紙などが対象になることが多いようです。ただし、商品の状態や種類によっては対象外となる場合もあります。'
  },
  {
    q: '古物商許可とは何ですか？',
    a: '古物商許可とは、中古品の売買や交換を業としておこなうために、警察署（公安委員会）から取得する必要がある公的な許可です。ブランド品や中古スマートフォン、金券類などを取り扱う事業者は、原則として古物商許可を取得したうえで営業をおこないます。'
  },
  {
    q: 'スマホで手続きできますか？',
    a: '多くの先払い買取業者は、スマートフォンから申し込みができ、写真送付や査定、契約まで完結できる仕組みになっています。商品は郵送する必要がありますが、基本的に店舗などに出向くことなく手続きを進めることができます。'
  },
  {
    q: '申し込みから入金までにどれくらい時間がかかりますか？',
    a: '最短即日の振り込みをうたっている先払い買取業者は多く、早い場合は数十分から数時間程度で代金が振り込まれることもあるようです。しかし、申し込みのタイミングや業者によっては、申し込みの翌日以降の入金になる場合もあります。'
  },
  {
    q: 'トラブルが起きたらどこに相談すればいいですか？',
    a: '先払い買取サービスを利用してトラブルが発生した場合は、消費生活センターや自治体が設けている消費生活相談窓口に相談することで、状況に応じた助言や対応方法を案内してもらえます。弁護士や司法書士などの専門家に相談するのも選択肢の一つです。'
  }
]

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <Link href="/" className="text-blue-600 hover:text-blue-800 mb-2 inline-block">
            ← トップページに戻る
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            よくある質問（FAQ）
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            先払い買取に関するよくある質問と回答
          </p>
          
          {/* ナビゲーション */}
          <nav className="mt-4 border-t pt-4">
            <ul className="flex flex-wrap gap-4 text-sm">
              <li><Link href="/" className="text-gray-700 hover:text-blue-600">トップ</Link></li>
              <li><Link href="/comparison" className="text-gray-700 hover:text-blue-600">業者比較</Link></li>
              <li><Link href="/articles/what-is-advance-purchase" className="text-gray-700 hover:text-blue-600">先払い買取とは</Link></li>
              <li><Link href="/faq" className="text-blue-600 font-semibold">FAQ</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* 注意喚起 */}
        <div className="warning-box mb-8">
          <p className="text-sm font-semibold text-gray-800">
            ⚠️ 本サイトは、先払い買取サービスの利用を推奨するものではありません。あくまで情報提供と注意喚起を目的としており、取引の可否や判断は利用者ご自身の責任においておこなってください。
          </p>
        </div>

        {/* FAQ一覧 */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 text-sm">
                  Q
                </span>
                <span className="pt-0.5">{faq.q}</span>
              </h2>
              <div className="ml-11">
                <p className="text-gray-700 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        {/* お問い合わせ先案内 */}
        <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-6 mt-8">
          <h2 className="text-xl font-bold mb-3">さらに詳しい情報が必要な方へ</h2>
          <p className="text-gray-700 mb-4">
            先払い買取サービスに関するトラブルや疑問がある場合は、以下の公的機関にご相談ください。
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• 消費生活センター：<strong>188</strong>（消費者ホットライン）</li>
            <li>• 金融庁 金融サービス利用者相談室</li>
            <li>• お住まいの自治体の消費生活相談窓口</li>
          </ul>
        </div>
      </main>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2026 お金の選び方研究所 - 先払い買取比較サイト</p>
          <div className="mt-4 space-x-4 text-sm">
            <Link href="/privacy" className="hover:text-gray-300">プライバシーポリシー</Link>
            <Link href="/" className="hover:text-gray-300">トップページ</Link>
            <Link href="/comparison" className="hover:text-gray-300">比較・ランキング</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
