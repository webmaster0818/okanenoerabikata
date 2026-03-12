import Link from 'next/link'
import { notFound } from 'next/navigation'

// 業者データ
const companiesData: Record<string, any> = {
  'ticket-center': {
    name: 'チケットセンター',
    url: 'https://ticket-center.jp/',
    description: 'ご不要になった金券を、チケットセンターならどこよりも高く買い取ります。商品の写真を撮影し、後日郵送が可能な買取サービスもございますので、お客様の好きなタイミングで手続きできるのもおすすめです。',
    buyingMethods: [
      {
        title: 'オンライン先払い買取（買取率65％～）',
        description: 'スマホなどで撮影した商品の写真を送り最速買取査定。お時間が無く急いで現金化したい方におすすめ'
      },
      {
        title: '郵送買取（買取率最大95％）',
        description: '先に買取希望の商品を郵送して実物で高額買取査定。少しでも高く現金化したい方におすすめ'
      }
    ],
    points: [
      '買取査定は最短10分',
      'お申し込みはスマホ1つでOK',
      '査定後も即日お振込み',
      '安心・安全の秘密厳守'
    ],
    license: '東京都公安委員会発行 第303292220992号',
    reviews: [
      {
        area: '東京都',
        age: '20代女性',
        comment: 'このサービスを利用して本当に良かったです。最初はネットでの買取に不安がありましたが、担当者の方の対応も素晴らしく安心して利用することができました。査定額も期待以上で、すぐに振り込まれました。ありがとうございました。'
      },
      {
        area: '埼玉県',
        age: '30代男性',
        comment: '商品券を買い取ってもらいたいと思い、このサービスを利用しました。査定から振込まで、全てがスムーズで安心でき、特に査定額が予想以上に高く驚きました。また次回もお願いしたいと思います。'
      }
    ]
  },
  'sheep-ticket': {
    name: 'シープチケット',
    url: 'https://s-ticket-a-bce.net/',
    description: 'ご不要になった商品券・金券・ギフト券・収入印紙などを、どこよりも早く、そして高く買取いたします。手続きはスマホ1つあればOK、即日お振込みも可能になります。',
    buyingMethods: [
      {
        title: '当日買取り：撮影した写真から最速査定＆買取',
        rate: '当日買取り60%／郵送買取り70%／店舗買取り90%／出張買取り30%'
      },
      {
        title: '郵送買取り：商品を郵送して高額査定＆買取',
        rate: '郵送買取り70%'
      },
      {
        title: '店舗買取り：お店に来ていただき安心査定＆買取',
        rate: '店舗買取り90%'
      },
      {
        title: '出張買取り：お客様の自宅で完結その場で査定＆買取',
        rate: '出張買取り30%'
      }
    ],
    points: [
      '対応が早い',
      'LINEで完結',
      '高額買取',
      '24時間365日受付'
    ],
    license: '東京都公安委員会 第301032316079号',
    reviews: [
      {
        area: '東京都',
        age: '30代男性',
        comment: '簡単な手続きでスムーズな取引ができ大変満足です。初めてオンラインで商品券買取をお願いしてみましたが、驚くほど簡単でスムーズでした。スタッフの方もとても丁寧で、査定から振込まで大変満足しています。'
      },
      {
        area: '埼玉県',
        age: '20代女性',
        comment: '安心して利用できるサービスとお店だと思います。使わない商品券を売りたく、このサービスを利用しました。直接お店に向かい対応してもらいましたが、非常にスムーズで、査定結果も満足のいくものでした。'
      }
    ]
  },
  'turtle-ticket': {
    name: 'タートルチケット',
    url: 'https://turtle-ticket.com/',
    description: '不要な商品券やギフト券をお持ちでしたら『TURTLE TICKET タートルチケット』にお任せください。当社の買取サービスなら、迅速な査定と高額買取、そして即日振込でお客様に満足していただけるサービスをお約束します！',
    buyingMethods: [
      {
        title: 'PLAN① 最速買取プラン：LINEでカンタン即日査定',
        rate: '買取率60％～最大80％'
      },
      {
        title: 'PLAN② 郵送買取プラン：商品を先に郵送し高額査定',
        rate: '買取率90％'
      }
    ],
    points: [
      '数分で振込完了、迅速に即日買取！',
      'LINEで即査定、後日郵送も可能！',
      '来店不要WEB手続きのみ！',
      '最高の買取率で満足度100％！'
    ],
    license: '東京都公安委員会 第301032316079号',
    reviews: [
      {
        area: '',
        age: '20代女性',
        comment: 'スマホだけで簡単に申込みができるので、忙しい私でもすぐに手続きができました。早めにお金を受け取りたかったので、その日のうちに振り込みまでしていただけて、本当に助かりました。'
      },
      {
        area: '',
        age: '30代男性',
        comment: '初めてこのようなサービスを利用しましたが、お店に行く必要がなく、とても便利でした。申込みから現金を受け取るまで驚くほどスムーズで、特にスタッフの対応が親切で、安心して取引を進めることができました。'
      },
      {
        area: '',
        age: '40代男性',
        comment: '急いで現金が必要だったので、即日振込ができるこちらのサービスを選びました。これまでいくつかの買取サービスを比較した結果、こちらが一番高額で買取ってくれたので、大満足です。'
      }
    ]
  },
  'reset-ticket': {
    name: 'リセチケット',
    url: 'https://reseticke.com/',
    description: 'お家や会社にいながら簡単に全国百貨店共通商品券、VJAギフトカードの買取が出来る画期的なサービス。それがリセチケットの来店不要買取です。商品券を売りたいと思ったその瞬間に、いつでもどこにいても、スマホがあればその場で買い取ります。',
    buyingMethods: [
      {
        title: '来店不要買取（最大買取率65％）',
        description: '申込フォームご入力後に公式LINEにご登録。最短15分で査定結果をお伝えいたします。'
      },
      {
        title: '郵送買取（最大買取率90％）',
        description: '買い取り希望商品を指定の住所へご郵送。到着後に査定を行い、お客様の指定口座に買取代金をお振込み致します。'
      }
    ],
    points: [
      '最短15分で査定完了',
      'LINEで完結',
      '他社との相見積もり歓迎',
      '年中無休24時間営業'
    ],
    license: '東京都公安委員会 第303292220992号',
    reviews: [
      {
        area: '',
        age: '',
        comment: 'リセチケすぐいけた。有力な情報ありがとう。'
      },
      {
        area: '',
        age: '',
        comment: '個人的にはバイチケ、リセチケ、タートルチケットはおすすめ。2回目以降も金額あがったし、スムーズに対応はしてくれた。'
      }
    ]
  }
}

type Props = {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return [
    { id: 'ticket-center' },
    { id: 'sheep-ticket' },
    { id: 'turtle-ticket' },
    { id: 'reset-ticket' }
  ]
}

export default async function CompanyPage({ params }: Props) {
  const { id } = await params
  const company = companiesData[id]

  if (!company) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <Link href="/" className="text-blue-600 hover:text-blue-800 mb-2 inline-block">
            ← トップページに戻る
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            {company.name}の口コミ評判・詳細情報
          </h1>
          
          {/* ナビゲーション */}
          <nav className="mt-4 border-t pt-4">
            <ul className="flex flex-wrap gap-4 text-sm">
              <li><Link href="/" className="text-gray-700 hover:text-blue-600">トップ</Link></li>
              <li><Link href="/comparison" className="text-gray-700 hover:text-blue-600">業者比較</Link></li>
              <li><Link href="/articles/what-is-advance-purchase" className="text-gray-700 hover:text-blue-600">先払い買取とは</Link></li>
              <li><Link href="/faq" className="text-gray-700 hover:text-blue-600">FAQ</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* 注意喚起 */}
        <div className="warning-box mb-8">
          <p className="text-sm font-semibold text-gray-800">
            ⚠️ 本記事は、先払い買取サービスや{company.name}の利用を推奨するものではありません。あくまで情報提供と注意喚起を目的としており、取引の可否や判断は利用者ご自身の責任においておこなってください。
          </p>
        </div>

        {/* 概要 */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">{company.name}とは？</h2>
          <p className="text-gray-700 mb-4">{company.description}</p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="font-bold text-lg mb-2">サービスの特徴</h3>
              <ul className="space-y-2">
                {company.points.map((point: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">古物商許可</h3>
              <p className="text-gray-700">{company.license}</p>
              
              <div className="mt-4">
                <a 
                  href={company.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  公式サイトはこちら →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 買取方法 */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">買取方法</h2>
          <div className="space-y-4">
            {company.buyingMethods.map((method: any, index: number) => (
              <div key={index} className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold text-lg">{method.title}</h3>
                {method.description && <p className="text-gray-700 mt-1">{method.description}</p>}
                {method.rate && <p className="text-sm text-gray-600 mt-1">{method.rate}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* 口コミ・評判 */}
        {company.reviews && company.reviews.length > 0 && (
          <section className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold mb-4">お客様の声</h2>
            <div className="space-y-4">
              {company.reviews.map((review: any, index: number) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  {review.area && review.age && (
                    <p className="text-sm text-gray-600 mb-2">{review.area} {review.age}</p>
                  )}
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 他の業者も見る */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">他のおすすめ業者</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {Object.entries(companiesData)
              .filter(([key]) => key !== id)
              .map(([key, comp]: [string, any]) => (
                <Link
                  key={key}
                  href={`/companies/${key}`}
                  className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all"
                >
                  <h3 className="font-bold text-lg mb-2">{comp.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    先払い買取率: <span className="font-semibold text-blue-600">{companiesData[key].buyingMethods[0]?.rate || '要確認'}</span>
                  </p>
                  <div className="text-blue-600 text-sm font-semibold">
                    詳細を見る →
                  </div>
                </Link>
              ))}
          </div>
          <div className="mt-6 text-center">
            <Link 
              href="/comparison"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              全業者を比較する
            </Link>
          </div>
        </section>

        {/* 注意喚起（下部） */}
        <div className="warning-box">
          <h3 className="font-bold mb-2">⚠️ ご利用の際の注意点</h3>
          <p className="text-sm text-gray-800">
            先払い買取サービスの中には悪質な業者が関与しているケースもあるため、契約内容や取引条件を十分に確認したうえで利用を検討しましょう。
            キャンセル料や違約金という名目で法外な請求や強引な取り立てを受けたり、個人情報を悪用されるリスクがあることも認識しておく必要があります。
          </p>
        </div>
      </main>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2026 お金の選び方研究所 - 先払い買取比較サイト</p>
          <div className="mt-4 space-x-4 text-sm">
            <Link href="/privacy" className="hover:text-gray-300">プライバシーポリシー</Link>
            <Link href="/faq" className="hover:text-gray-300">よくある質問</Link>
            <Link href="/" className="hover:text-gray-300">トップページ</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
