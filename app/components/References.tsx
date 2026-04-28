export default function References() {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 my-6">
      <h3 className="font-bold text-gray-700 mb-3 text-sm uppercase tracking-wide">出典・参考資料</h3>
      <ul className="space-y-2 text-sm">
        <li>
          <a
            href="https://www.fsa.go.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            金融庁（Financial Services Agency）
          </a>
          <span className="text-gray-500 ml-2">— 金融行政・利用者保護に関する情報</span>
        </li>
        <li>
          <a
            href="https://www.npa.go.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            警察庁（National Police Agency）
          </a>
          <span className="text-gray-500 ml-2">— 古物商許可・犯罪被害対策に関する情報</span>
        </li>
        <li>
          <a
            href="https://www.caa.go.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            消費者庁（Consumer Affairs Agency）
          </a>
          <span className="text-gray-500 ml-2">— 消費者保護・特定商取引に関する情報</span>
        </li>
        <li>
          <a
            href="https://www.kokusen.go.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            国民生活センター
          </a>
          <span className="text-gray-500 ml-2">— 消費生活に関する相談・情報提供</span>
        </li>
      </ul>
    </div>
  )
}
