import { Link, NavLink } from "react-router";
import pic1 from "/images/622706233_1495709359230857_4968142213626478764_n.jpg";
import carouselPic1 from "/images/photo-1612423284934-2850a4ea6b0f.jpg";
import carouselPic2 from "/images/photo-1441984904996-e0b6ba687e04.jpg";
import carouselPic3 from "/images/premium_photo-1701204056808-22fc818affec.jpg";
import FBVideoPlayer from "../../components/FBVideoPlayer";

import newPic3 from "/images/633423794_1512483214220138_8779339706135435643_n.jpg";
import newPic2 from "/images/641366428_1522727963195663_324696250829535432_n.jpg";
import newPic1 from "/images/635090669_1514084747393318_3546082590376449706_n.jpg";

function Home() {
  const url1 =
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1260580269469143%2F&show_text=false&width=267&t=0";

  const url2 =
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F920215287133291%2F&show_text=false&width=267&t=0";

  const url3 =
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2380489569120920%2F&show_text=false&width=267&t=0";

  const url4 =
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F759885076812126%2F&show_text=false&width=267&t=0";
  return (
    <>
      <div className="py-1" style={{ backgroundColor: "#bfb3c2" }}>
        <div>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div
              className="carousel-inner"
              style={{ backgroundColor: "#d8d0da", color: "#4a484b" }}
            >
              <div className="carousel-item active">
                <div className="d-flex flex-wrap justify-content-center container-fluid">
                  <div className="row">
                    <div className="col-lg-6 col-sm-12">
                      <img
                        src={newPic3}
                        className="d-block float-end"
                        style={{
                          width: "100%",
                          objectFit: "contain",
                        }}
                        alt="..."
                      />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <div className="p-3 h-100">
                        <h1 className="fs-4">🧧新春休假公告🧧</h1>
                        <p>
                          明天2/15還有營業喔，年前最後一個營業日 也是最後出貨日
                        </p>
                        <p>年前想衝一波的姊妹一定要來👍👍</p>
                        <p>2/22初六開始正常營業 衷心感謝一年來的支持跟照顧！</p>
                        <p>
                          先預祝姐妹們穿得漂亮，心情好好！
                          新春愉快！怎麼吃都不胖🤣
                        </p>

                        <p className="text-secondary align-right">
                          2026-02-15 04:00:00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex flex-wrap justify-content-between container-fluid">
                  <div className="row">
                    <div className="col-lg-6 col-sm-12">
                      <img
                        src={newPic2}
                        className="d-block float-end"
                        style={{
                          width: "100%",
                          objectFit: "contain",
                        }}
                        alt="..."
                      />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <div className="p-3  h-100">
                        <h1 className="fs-4">🧧 Inod 換季出清限時登場！🧧</h1>

                        <p>都只有一件，別人先選走就沒有囉</p>

                        <p>任選 2 件 7 折、 3 件直接 6 折帶回家 ✨</p>

                        <p>
                          把喜歡的版型、舒服的質感一次收藏，
                          用更甜的價格，迎接新的季節。 數量有限，錯過真的會心痛
                          💛
                        </p>

                        <p>線上姐妹這裡看喔👇👇👇👇</p>
                        <p>
                          Line社群：
                          <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fline.me%2Fti%2Fg2%2FEJ8uK7SDA0RfQ33lII2KIYISfMiz-UvKMLpwtw%3Futm_source%3Dinvitation%26utm_medium%3Dlink_copy%26utm_campaign%3Ddefault%26fbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBEyOVlhZXdweFJMWU5Mcm9Zb3NydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR5Mjft3l10F6X1C4p08KrNTPT4hC9jUjuAGPcpM20JTR1MazuDh4zgtI58JzA_aem_NXW0ct_4aLmQu118gLXDSg&h=AT5s_CVt-NJAtCHyDPRpJUCh1C2Ehg4_3yMjZctCforhJIp0Ogcw-ylcynAz_rMB0w4PEHFI57VdnvurvQ5bkraPP6tLLPHsuYwtTdYYwWnW5rY0uOuzgOhW_4-zDzHlFTMddPQ0MgiP74mD&__tn__=-UK*F&c[0]=AT62vlHx6LqyFvUzVjNJ23pLAXDTbILErzW16jzj3dx9Z-Yz8hxpHINa3oGtE-dqhwOiAIs21yExGssjKGFllL_bLUG5s_PUFZh1UUNH_EILGZxxc-qN1xaO6_rhgMyaeI-NAEmdkq0Ul5yMS37w_cD4_HO1Knt7RizboxykBeg05LQOGuKrgX2xXqLujTuE8BIQgEB4jihhBNPEabBuBDL82Q">
                            https://line.me/....../EJ8uK7SDA0RfQ33lII2KIYISfMiz......{" "}
                          </a>
                        </p>

                        <p className="text-secondary align-right">
                          2026-02-25 04:00:00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex flex-wrap justify-content-between container-fluid">
                  <div className="row">
                    <div className="col-lg-6 col-sm-12">
                      <img
                        src={newPic1}
                        className="d-block float-end"
                        style={{
                          width: "100%",
                          objectFit: "contain",
                        }}
                        alt="..."
                      />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <div className="p-3  h-100">
                        <h1 className="fs-4">
                          🧧我們新增了LINE 官方＋LINE 社群囉！🧧
                        </h1>
                        <p>
                          喜歡 Inod 的妳，別再只是默默關注 🤍 加入我們的 LINE
                          官方＋LINE 社群，
                          第一時間收到新品資訊、穿搭分享與限定優惠。
                          社群裡還能一起聊天、看實穿照、 掌握不公開的小驚喜✨
                          把喜歡變成日常，把漂亮變成習慣。
                          點擊加入，和我們更靠近一點。 現在加入 Inod LINE 官方，
                          直接送你 $100 購物金 🤍✨
                          新品資訊搶先看、限時優惠不漏接，
                          還有不定時的小驚喜在等你。 Line官方連結：
                          https://lin.ee/SE9H3Jo Line社群：
                          https://line.me/....../EJ8uK7SDA0RfQ33lII2KIYISfMiz......{" "}
                        </p>

                        <p className="text-secondary align-right">
                          2026-02-15 04:00:00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <div className="row my-3 mx-1 " style={{ color: "#916688" }}>
        <div className="col-lg-3 col-6">
          <div
            className="rounded fs-5 shadow py-3 m-1"
            style={{ backgroundColor: "#e2d3d9", margin: "1px" }}
          >
            <i className="bi bi-claude"></i> 穿 搭 側 拍
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div
            className="rounded fs-5 shadow py-3 m-1"
            style={{ backgroundColor: "#e7d4ed" }}
          >
            <i className="bi bi-bag-heart"></i> 闆 娘 推 薦
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div
            className="rounded fs-5 shadow py-3 m-1"
            style={{ backgroundColor: "#f9d5ea" }}
          >
            <i className="bi bi-airplane-engines-fill"></i> 連 線 許 願
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div
            className="rounded fs-5 shadow py-3 m-1"
            style={{ backgroundColor: "#e7effe" }}
          >
            <i className="bi bi-clipboard-heart-fill"></i> 現 貨 優 惠
          </div>
        </div>
      </div>

      <div>
        <div
          className="d-flex justify-content-between py-1 align-items-center"
          style={{ backgroundColor: "#eadceb", color: "#785571" }}
        >
          <h1 className="fs-5 pt-2 ps-1 text-start">
            <i className="bi bi-balloon-fill"></i>限時優惠活動
          </h1>
          <div className="fw-bold pe-1">
            更多活動 <i className="bi bi-chevron-double-right"></i>
          </div>
        </div>

        <div className="d-flex flex-wrap flex-wrap justify-content-center justify-content-lg-between">
          <div
            className="card mt-1 mb-5"
            style={{ width: "20rem", borderRadius: "0px" }}
          >
            <div style={{ height: "25rem" }}>
              <img
                src={pic1}
                className="card-img-top object-fit-cover"
                style={{ borderRadius: "0px", height: "25rem" }}
                alt="..."
              />
            </div>

            <div className="card-body">
              <h5 className="card-title" style={{ color: "#785571" }}>
                秋冬外套節
              </h5>
              <p className="card-text text-secondary">
                📣只有3天📣1/28、29、30 任選活動區「自選品大衣」
                全單商品不限金額,每滿3000現折300，超划算機會難得喔！
              </p>
              <a href="#" className="btn mybtn">
                <i className="bi bi-yelp"></i> 來去逛逛
              </a>
            </div>
          </div>
          <div
            className="card mt-1 mb-5"
            style={{ width: "20rem", borderRadius: "0px" }}
          >
            <div style={{}}>
              <img
                src="https://images.unsplash.com/photo-1554568218-0f1715e72254?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D"
                className="card-img-top object-fit-cover"
                style={{ borderRadius: "0px", height: "25rem" }}
                alt="..."
              />
            </div>

            <div className="card-body">
              <h5 className="card-title" style={{ color: "#785571" }}>
                春夏新款
              </h5>
              <p className="card-text text-secondary">
                限時優惠85折，現貨有限，喜歡要快點帶回家喔!慢來就沒有了
              </p>
              <a href="#" className="btn mybtn">
                <i className="bi bi-yelp"></i> 來去逛逛
              </a>
            </div>
          </div>
          <div
            className="card mt-1 mb-5"
            style={{ width: "20rem", borderRadius: "0px" }}
          >
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1714226832298-086095850f93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D"
                className="card-img-top object-fit-cover"
                style={{
                  height: "25rem",
                  borderRadius: "0px",
                }}
                alt="..."
              />
            </div>

            <div className="card-body">
              <h5 className="card-title" style={{ color: "#785571" }}>
                日本連線快閃
              </h5>
              <p className="card-text text-secondary">
                限時優惠85折，現貨有限，喜歡要快點帶回家喔!慢來就沒有了
              </p>
              <a href="#" className="btn mybtn">
                <i className="bi bi-yelp"></i> 來去逛逛
              </a>
            </div>
          </div>

          <div
            className="card mt-1 mb-5"
            style={{ width: "20rem", borderRadius: "0px" }}
          >
            <div>
              <img
                src="https://images.unsplash.com/photo-1630932245848-4850ae369ba4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ4fHxjbG90aGVzfGVufDB8fDB8fHww"
                className="card-img-top object-fit-cover"
                style={{ borderRadius: "0px", height: "25rem" }}
                alt="..."
              />
            </div>

            <div className="card-body">
              <h5 className="card-title" style={{ color: "#785571" }}>
                秋冬現貨折扣
              </h5>
              <p className="card-text text-secondary">
                限時優惠85折，現貨有限，喜歡要快點帶回家喔!慢來就沒有了
              </p>
              <a href="#" className="btn mybtn">
                <i className="bi bi-yelp"></i> 來去逛逛
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className="d-flex justify-content-between py-1 align-items-center"
          style={{ backgroundColor: "#eadceb", color: "#785571" }}
        >
          <h1 className="fs-5 pt-2 ps-1 text-start">
            <i className="bi bi-balloon-fill"></i>新品穿拍
          </h1>
          <div className="fw-bold pe-1">
            更多影片 <i className="bi bi-chevron-double-right"></i>
          </div>
        </div>

        <div className="d-flex flex-wrap justify-content-center justify-content-lg-between">
          <div
            className="card mt-1 mb-5"
            style={{ width: "20rem", borderRadius: "0px" }}
          >
            <div style={{ height: "35rem", backgroundColor: "#d8d0da" }}>
              <FBVideoPlayer url={url1} />
            </div>

            <div className="card-body">
              <h5 className="card-title" style={{ color: "#785571" }}>
                秋冬外套節
              </h5>
            </div>
          </div>
          <div
            className="card mt-1 mb-5"
            style={{ width: "20rem", borderRadius: "0px" }}
          >
            <div style={{ height: "35rem", backgroundColor: "#d8d0da" }}>
              <FBVideoPlayer url={url2} />
            </div>

            <div className="card-body">
              <h5 className="card-title" style={{ color: "#785571" }}>
                春夏新款
              </h5>
            </div>
          </div>
          <div
            className="card mt-1 mb-5"
            style={{ width: "20rem", borderRadius: "0px" }}
          >
            <div style={{ height: "35rem", backgroundColor: "#d8d0da" }}>
              <FBVideoPlayer url={url3} />
            </div>

            <div className="card-body">
              <h5 className="card-title" style={{ color: "#785571" }}>
                日本連線快閃
              </h5>
            </div>
          </div>

          <div
            className="card mt-1 mb-5"
            style={{ width: "20rem", borderRadius: "0px" }}
          >
            <div style={{ height: "35rem", backgroundColor: "#d8d0da" }}>
              <FBVideoPlayer url={url4} />
            </div>

            <div className="card-body ">
              <h5 className="card-title" style={{ color: "#785571" }}>
                秋冬現貨折扣
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className="py-1"
          style={{ backgroundColor: "#eadceb", color: "#785571" }}
        >
          <h1 className="fs-5 pt-2 ps-1 text-start">
            <i className="bi bi-balloon-heart"></i> 聯絡 Inod
          </h1>
        </div>
        <div
          className="text-start p-2 mb-3"
          style={{ color: "#958c98", border: "solid 1px #eadceb " }}
        >
          <div>
            <div>
              <p>
                <i className="bi bi-geo-alt-fill"></i> 地址： 320
                新竹縣竹北市莊敬五街43號1樓
              </p>
              <p>
                <i className="bi bi-facebook"></i>{" "}
                <a href="#">Inod日本精品服飾</a>
              </p>
              <p>
                <i className="bi bi-telephone-fill"></i> 03-6681677
              </p>
              <p>
                <i className="bi bi-line"></i> ID：6681677
              </p>
              <hr />
              <p>
                Inod
                以日本女裝、台灣設計師款、韓國真皮鞋履，希望這些優質商品，能讓大家買得開心又安心❤️，在竹北喜來登飯店附近有實體店面，非常歡迎新竹地區朋友自取哦！
                <br />
                另有經營代購，利潤微薄，希望吸引「有禮貌、有氣質」喜歡優質商品的同好，「無禮無理」或「要求過高的朋友」麻煩去參加別的社團哦！哈哈（其他團主別打偶啊！）
              </p>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.2115410550623!2d121.02376307605307!3d24.82243834677672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346836e4c802b70f%3A0xc493c344bcdded88!2zMzAy5paw56u557ij56u55YyX5biC6I6K5pWs5LqU6KGXNDPomZ8x!5e0!3m2!1szh-TW!2stw!4v1772369431716!5m2!1szh-TW!2stw"
                height="400"
                style={{ border: 0, width: "100%" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
