function Shop() {
  return (
    <div className="py-4">
      <div
        className="d-flex justify-content-between py-2"
        style={{ color: "#785571" }}
      >
        <h1 className="fs-4">
          <i className="bi bi-bluesky me-2"></i>
          購物說明
        </h1>
      </div>
      <div
        className="text-start p-2 mb-3 rounded"
        style={{ color: "#958c98", border: "solid 1px #bfb3c2 " }}
      >
        {" "}
        <h3 className="fs-6">團購說明</h3>
        <p>
          請先加<a href="https://www.facebook.com/li.hui.mai.2025">李慧買</a>
          好友，才能入社哦！
          <i class="bi bi-people-fill"></i>
          <a href="https://www.facebook.com/groups/171949173180343">
            蜜柑太太 日本連線代購
          </a>
        </p>
        <p>
          購買方式： ☝️留言處+1
          <br />
          👌李慧買通知購買總額 👍小跑步或動動手指去匯款 ✋翹腳等著收貨
        </p>
        <p>
          ❤️要等多久？
          <br />
          現貨爲主+預購都有，預購商品結單後約7～20個工作天出貨！急用的客人千萬別+1喔！拜託
          <br />
          💙運費
          <br />
          <ul>
            <li>📍都80元，滿2000免運 </li>
            <li>📍7-11店到店純取貨(須先匯款) </li>
            <li>📍便利袋 </li>
            <li>📍面交:0。(地點:竹北喜來登附近實體店面）。</li>

            <li>
              📍郵局（僅提供尺寸過大商品，7-11店到店或便利袋都有尺寸限制～尺寸太大只有兩條路：郵局或面交
            </li>
          </ul>
          【缺貨處理】針對訂購的商品有缺貨情形，您可以自由選擇以下三種處理方式：
          <ol>
            <li>
              缺貨的商品我真的很需要也可以等待，請幫我保留訂單繼續追踨商品。
            </li>
            <li>缺貨商品金額轉為下次購物抵用金。</li>
            <li>缺貨商品金額直接匯退給水水</li>
          </ol>
        </p>
      </div>
    </div>
  );
}

export default Shop;
