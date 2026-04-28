export default function ConsultationList() {
  return (
    <div className="bg-amber-50 border border-amber-300 rounded-xl p-6 my-6">
      <h3 className="font-bold text-amber-800 mb-4 text-base">困ったときの相談窓口</h3>
      <ul className="space-y-3 text-sm">
        <li className="flex items-start gap-2">
          <span className="text-amber-600 font-bold flex-shrink-0">TEL</span>
          <span>
            <span className="font-semibold text-gray-800">消費者ホットライン</span>
            <span className="ml-2 text-gray-600">188（いやや！）</span>
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-amber-600 font-bold flex-shrink-0">TEL</span>
          <span>
            <span className="font-semibold text-gray-800">警察相談専用電話</span>
            <span className="ml-2 text-gray-600">#9110</span>
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-amber-600 font-bold flex-shrink-0">TEL</span>
          <span>
            <span className="font-semibold text-gray-800">法テラス（法律相談）</span>
            <span className="ml-2 text-gray-600">0570-078374</span>
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-amber-600 font-bold flex-shrink-0">WEB</span>
          <span>
            <a
              href="https://www.kokusen.go.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-700 underline hover:text-blue-900"
            >
              国民生活センター
            </a>
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-amber-600 font-bold flex-shrink-0">TEL</span>
          <span>
            <span className="font-semibold text-gray-800">金融庁 金融サービス利用者相談室</span>
            <span className="ml-2 text-gray-600">0570-016811</span>
          </span>
        </li>
      </ul>
    </div>
  )
}
