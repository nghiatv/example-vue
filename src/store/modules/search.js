/**
 * Created by nghia on 2/15/17.
 */
import * as types from '../mutation-types'
import searchAPI from '../../api/search'
import axios from 'axios'

const pattern_data = {
  "err": 0,
  "data": {
    "items": [
      {
        "id": 2102,
        "title": "BT: Tạo thiệp chúc mừng online",
        "description": "<h3 style=\"line-height: 25.6px;\"> </h3>\n\n<p style=\"line-height: 25.6px;\"><big><strong>Bài tập</strong></big></p>\n\n<p style=\"line-height: 25.6px;\">Tạo một trang web hiển thị một tấm thiệp chúc mừng nhân các dịp đặc biệt (sinh nhật, 8-3, 20-11, ...) hoặc một bức thư tình gửi tặng bạn gái (bạn trai, ...)</p>\n\n<h3 style=\"line-height: 25.6px;\"> </h3>\n\n<p style=\"line-height: 25.6px;\"><big><strong>Yêu cầu</strong></big></p>\n\n<p style=\"line-height: 25.6px;\">- Có sử dụng hình ảnh,&nbsp;hiệu ứng, animation</p>\n\n<p>- Trình bày sáng tạo, nội dung có ý nghĩa</p>\n\n<p> </p>\n\n<p style=\"line-height: 25.6px;\"><big><strong>Tham khảo</strong></big></p>\n\n<p style=\"line-height: 25.6px;\">- Để chèn nhạc nền vào trang web, có thể sử dụng thẻ&nbsp;<strong>&lt;audio&gt;&nbsp;</strong>như sau:</p>\n\n<pre>\n<code class=\"language-html\">&lt;audio autoplay&gt;\n  &lt;source src=\"music.mp3\" type=\"audio/mpeg\"&gt;\n&lt;/audio&gt;</code></pre>\n\n<p style=\"line-height: 25.6px;\">Trong đó&nbsp;<strong>music.mp3</strong>&nbsp;là đường dẫn đến file nhạc.</p>\n\n<ul style=\"line-height: 25.6px;\">\n\t<li style=\"line-height: 25.6px;\"><a href=\"http://codepen.io/NickyCDK/pen/AIonk\" target=\"_blank\">Hiệu ứng tuyết rơi</a></li>\n\t<li style=\"line-height: 25.6px;\"><a href=\"http://fiddle.jshell.net/DYN6U/\" target=\"_blank\">Hiệu ứng bong bóng</a></li>\n\t<li style=\"line-height: 25.6px;\"><a href=\"http://codepen.io/natewiley/pen/pvNjoz\" target=\"_blank\">Hiệu ứng pháo hoa</a>&nbsp;(bật view compiled để xem code gốc)</li>\n\t<li style=\"line-height: 25.6px;\"><a href=\"http://codepen.io/c4rin3/pen/gPxxwz\" target=\"_blank\">Wish card 2016</a></li>\n</ul>\n"
      },
      {
        "id": 2346,
        "title": "BT: Memory card 1",
        "description": "<p> </p>\n\n<p><big><strong>Bài tập</strong></big></p>\n\n<p>Tạo 1 trang HTML có 5 cặp&nbsp;lá bài trở lên, mỗi lá bài có 2 mặt, mặt sau giống nhau còn mặt trước có thể là nội dung bất kỳ. Khi bấm chuột&nbsp;vào 1 lá bài thì nó sẽ lật mặt kia lên, lá bài nào đang lật thì khi bấm vào sẽ không có gì xảy ra (hoặc không bấm vào được).</p>\n\n<p> </p>\n\n<p><big><strong>Yêu cầu</strong></big></p>\n\n<p>- Trang trí đẹp, rõ ràng, layout không bị xô lệch, có hiệu ứng khi hover lên trên lá bài.</p>\n\n<p>- Mỗi lần load trang thì vị trí các lá bài thay đổi (sử dụng jQuery để tạo content động).</p>\n\n<p> </p>\n\n<p><big><strong>Gợi ý</strong></big></p>\n\n<p>- Một số&nbsp;API tương tác với class của jQuery:&nbsp;</p>\n\n<table border=\"1\" cellpadding=\"1\" cellspacing=\"1\" class=\"table table-bordered table-striped\" style=\"max-width:500px; min-width:300px\">\n\t<thead>\n\t\t<tr>\n\t\t\t<th>API</th>\n\t\t\t<th>Mô tả</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>.addClass(x)</td>\n\t\t\t<td>Thêm class<strong> x</strong> vào element</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>.removeClass(y)</td>\n\t\t\t<td>Xóa class<strong> y</strong> khỏi element</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>.toggleClass(z)</td>\n\t\t\t<td>Bật/tắt class<strong> z</strong> trên element. Nếu element đã có class <strong>z</strong> thì sẽ xóa nó ra khỏi element, còn nếu không thì sẽ thêm vào.</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>.hasClass(y)</td>\n\t\t\t<td>Kiểm tra xem element có class <strong>y</strong> hay không. Kết quả trả về <strong>true </strong>hoặc <strong>false&nbsp;</strong></td>\n\t\t</tr>\n\t</tbody>\n</table>\n\n<p>- Một số&nbsp;API liên quan đến selector:&nbsp;</p>\n\n<table border=\"1\" cellpadding=\"1\" cellspacing=\"1\" class=\"table table-bordered table-striped\" style=\"max-width:500px; min-width:300px\">\n\t<thead>\n\t\t<tr>\n\t\t\t<th>API</th>\n\t\t\t<th>Mô tả</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>.children()</td>\n\t\t\t<td>Lấy toàn bộ element con trực tiếp của element hiện tại&nbsp;(có thể truyền tham số là 1 selector)</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>.parents()</td>\n\t\t\t<td>Lấy element cha trực tiếp của element hiện tại&nbsp;(có thể truyền tham số là 1 selector)</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>.find(<strong>x</strong>)</td>\n\t\t\t<td>Tìm các element con của element hiện tại phù hợp với điều kiện selector <strong>x</strong></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>.closest(<strong style=\"line-height:25.6px\">y</strong>)</td>\n\t\t\t<td>Tìm element gần nhất so với element hiện tại phù hợp với điều kiện selector&nbsp;<strong style=\"line-height:25.6px\">y</strong></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>.prev()</td>\n\t\t\t<td>Lấy element đằng trước và ngang hàng với element hiện tại (có thể truyền tham số là 1 selector)</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>.next()</td>\n\t\t\t<td>Lấy element đằng sau và ngang hàng với element hiện tại&nbsp;(có thể truyền tham số là 1 selector)</td>\n\t\t</tr>\n\t</tbody>\n</table>\n\n<p>- Để gán sự kiện vào 1 element trong jQuery ta sử dụng phương thức <a href=\"http://api.jquery.com/on/\" target=\"_blank\">.on()</a>&nbsp;(tương tự phương thức&nbsp;<a href=\"http://www.w3schools.com/jsref/met_element_addeventlistener.asp\" target=\"_blank\">addEventListener()</a> trong Javascript).</p>\n\n<p>- Sử dụng API <a href=\"http://api.jquery.com/attr/\" target=\"_blank\">.attr()</a>&nbsp;để thay đổi giá trị một&nbsp;<strong>attribute </strong>của element. Một element có thể có nhiều attribute do người dùng tự đặt ra để giúp cho việc code javascript được dễ dàng hơn. Ví dụ:&nbsp;&nbsp;(theo chuẩn HTML5 chúng ta nên thêm tiền tố <em>data</em> ở trước)</p>\n\n<pre>\n<code class=\"language-javascript\">&lt;div id=\"test\" data-id=\"100\" data-name=\"robin\"&gt;&lt;/div&gt;\n\n&lt;script&gt;\n    // Lấy giá trị của attribute 'data-id'\n    var id = $('#test').attr('data-id');   // id = \"100\"\n\n    // Đổi giá trị của attribute 'data-name' thành 'Robin'\n    $('#test').attr('data-name', 'Robin');\n&lt;/script&gt;</code></pre>\n\n<p> </p>\n\n<p>- Để load content động thì ta lưu tên ảnh vào 1 mảng, sau đó dùng vòng lặp để tạo ra nội dung HTML&nbsp;và gán vào 1 element có sẵn.&nbsp;</p>\n\n<p>- Để thay đổi nội dung trang mỗi lần load trang, ta đảo vị trí các phần tử của mảng, do đó khi sử dụng vòng lặp thì vị trí các ảnh sẽ thay đổi.</p>\n\n<pre>\n<code class=\"language-javascript\">// Hàm đảo vị trí các phần tử trong mảng\n// Tham khảo http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array\nfunction shuffle(array) {\n    var currentIndex = array.length, temporaryValue, randomIndex;\n\n    // While there remain elements to shuffle...\n    while (0 !== currentIndex) {\n\n        // Pick a remaining element...\n        randomIndex = Math.floor(Math.random() * currentIndex);\n        currentIndex -= 1;\n\n        // And swap it with the current element.\n        temporaryValue = array[currentIndex];\n        array[currentIndex] = array[randomIndex];\n        array[randomIndex] = temporaryValue;\n  }\n\n  return array;\n}</code></pre>\n\n<p> </p>\n\n<p><big><strong>Chú ý</strong></big><br />\nNếu cảm thấy bài này quá khó thì có thể tạm thời bỏ qua, sau khi học xong phần <strong>Ứng dụng&nbsp;Kanban Board</strong>&nbsp;thì quay lại làm tiếp.</p>\n"
      },
      {
        "id": 2169,
        "title": "BT: Tạo trang Image Gallery",
        "description": "<p style=\"line-height: 25.6px;\"> </p>\n\n<p style=\"line-height: 25.6px;\"><big><strong>Bài tập</strong></big></p>\n\n<p style=\"line-height: 25.6px;\">Tạo trang Image Gallery, hiển thị 1 danh sách 10 hình ảnh trở lên</p>\n\n<h3 style=\"line-height: 25.6px;\"> </h3>\n\n<p style=\"line-height: 25.6px;\"><big><strong>Yêu cầu</strong></big></p>\n\n<p style=\"line-height: 25.6px;\">- Trang web phải có menu, banner (hoặc logo).</p>\n\n<p style=\"line-height: 25.6px;\">- Hiển thị 2 - 3 ảnh trên&nbsp;1 hàng.&nbsp;Ảnh nên có <u>title</u> và <u>alt</u> đầy đủ, các ảnh có thể kích thước khác nhau nhưng tỉ lệ nên&nbsp;giống nhau (ví dụ tỉ lệ chiều rộng&nbsp;và chiều dài&nbsp;là 2:3).</p>\n\n<p style=\"line-height: 25.6px;\">- Layout không bị xô lệch, gióng hàng đều giữa các ảnh với nhau.</p>\n\n<p style=\"line-height: 25.6px;\">- Xem tốt trên các màn hình desktop, không xuất hiện thanh cuộn ngang, ảnh không bị méo.</p>\n\n<p style=\"line-height: 25.6px;\">- Có hiệu ứng khi hover lên ảnh (không vỡ layout).</p>\n"
      },
      {
        "id": 2170,
        "title": "BT: Responsive web",
        "description": "<p> </p>\n\n<p><big><strong>Bài tập</strong></big></p>\n\n<p>Thiết kế 1 website theo chủ đề tùy chọn. Được phép sử dụng thư viện tùy ý.</p>\n\n<p> </p>\n\n<p><big><strong>Yêu cầu</strong></big></p>\n\n<p>- Tối thiểu 3 trang trở lên, có liên kết giữa các trang.</p>\n\n<p>- Giao diện đẹp, sáng sủa, dễ dùng.</p>\n\n<p>- Theo đúng chuẩn HTML5 + Responsive design</p>\n\n<p>- Nộp bài trên github static page.</p>\n\n<p> </p>\n\n<p><big><strong>Gợi ý</strong></big></p>\n\n<p>- Có thể sử dụng framework để code cho nhanh như: <a href=\"http://getbootstrap.com/\" target=\"_blank\">Bootstrap</a>, <a href=\"http://foundation.zurb.com/sites.html\" target=\"_blank\">Foundation</a>, <a href=\"http://materializecss.com/\" target=\"_blank\">Materialize</a>, <a href=\"http://www.w3schools.com/w3css/default.asp\" target=\"_blank\">W3.CSS</a>, ... (Các framework có cách thức sử dụng đều tương tự như Bootstrap nhưng có giao diện khác nhau và component khác nhau)</p>\n\n<p>- Sử dụng plugins <a href=\"https://daneden.github.io/animate.css/\" target=\"_blank\">animate.css</a> để tạo các hiệu ứng animation đẹp 1 cách nhanh chóng hoặc sử dụng tool sau để tạo các hiệu ứng CSS đẹp&nbsp;<a href=\"http://onlinegenerator.net/\" target=\"_blank\">onlinegenerator.net</a></p>\n\n<p>- Trang web chỉ nên sử dụng 3 - 5 màu (lấy màu logo làm màu chủ đạo), tránh sử dụng quá nhiều màu sắc lòe loẹt. Tham khảo một số trang web sau để chọn màu sắc cho phù hợp:&nbsp;<a href=\"http://www.colorcombos.com/\" style=\"line-height: 25.6px;\" target=\"_blank\">colorcombos.com</a>,&nbsp;<a href=\"http://paletton.com/\" style=\"line-height: 25.6px;\" target=\"_blank\">paletton.com</a>,&nbsp;<a href=\"http://html-color-codes.info/colors-from-image/\" style=\"line-height: 25.6px;\" target=\"_blank\">html-color-codes.info/colors-from-image</a>,&nbsp;<a href=\"http://www.0to255.com/\" style=\"line-height: 25.6px;\" target=\"_blank\">0to255.com</a></p>\n\n<p>- Tham khảo trang sau để thiết kế giao diện người dùng&nbsp;<a href=\"https://goodui.org/\" target=\"_blank\">https://goodui.org</a></p>\n\n<p>- Có thể dùng thêm thư viện jQuery (cách dùng tương tự Bootstrap Javascript). Ví dụ sử dụng plugins <a href=\"http://bxslider.com/\" target=\"_blank\">bxSlider</a>&nbsp;để tạo slide ảnh (chú ý link trong ví dụ là link root tương đối, chỉ chạy trên site thật)</p>\n\n<pre>\n<code class=\"language-html\">&lt;head&gt;\n  &lt;link href=\"/css/jquery.bxslider.css\" rel=\"stylesheet\" /&gt;\n&lt;/head&gt;\n\n&lt;body&gt;\n&lt;ul class=\"bxslider\"&gt;\n  &lt;li&gt;&lt;img src=\"/images/pic1.jpg\" /&gt;&lt;/li&gt;\n  &lt;li&gt;&lt;img src=\"/images/pic2.jpg\" /&gt;&lt;/li&gt;\n  &lt;li&gt;&lt;img src=\"/images/pic3.jpg\" /&gt;&lt;/li&gt;\n  &lt;li&gt;&lt;img src=\"/images/pic4.jpg\" /&gt;&lt;/li&gt;\n&lt;/ul&gt;\n\n&lt;script src=\"//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js\"&gt;&lt;/script&gt;\n&lt;script src=\"/js/jquery.bxslider.min.js\"&gt;&lt;/script&gt;\n&lt;script&gt;\n  $(function(){\n    $('.bxslider').bxSlider();\n  });\n&lt;/script&gt;\n&lt;/body&gt;</code></pre>\n\n<p>- Tham khảo các thư viện jQuery tại đây&nbsp;<a href=\"http://plugins.jquery.com/\" style=\"line-height: 25.6px;\" target=\"_blank\">plugins.jquery.com</a>,&nbsp;<a href=\"http://www.jqueryrain.com/\" style=\"line-height: 25.6px;\" target=\"_blank\">jqueryrain.com</a></p>\n\n<p>- Một số jQuery Plugins free về text:&nbsp;<a href=\"https://speckyboy.com/2014/02/10/jquery-typography-plugins/\" style=\"line-height: 25.6px;\" target=\"_blank\">jQuery typography plugins</a></p>\n\n<p>- Một số jQuery tạo hiệu ứng đẹp:&nbsp;<a href=\"https://jqueryui.com/\" style=\"line-height: 25.6px;\" target=\"_blank\">jQueryUI</a>,&nbsp;<a href=\"http://masonry.desandro.com/\" style=\"line-height: 25.6px;\" target=\"_blank\">Masonry</a>,&nbsp;<a href=\"https://daneden.github.io/animate.css/\" style=\"line-height: 25.6px;\" target=\"_blank\">F</a><a href=\"http://flipclockjs.com/\" style=\"line-height: 25.6px;\" target=\"_blank\">lipClock</a>,&nbsp;<a href=\"http://git.blivesta.com/animsition/\" style=\"line-height: 25.6px;\" target=\"_blank\">Animsition</a>,&nbsp;<a href=\"https://codyhouse.co/library/\" style=\"line-height: 25.6px;\" target=\"_blank\">Codyhouse</a>,&nbsp;<a href=\"https://github.com/imakewebthings/waypoints\" style=\"line-height: 25.6px;\" target=\"_blank\">jQueryWaypoints</a></p>\n"
      },
      {
        "id": 2478,
        "title": "BT: Memory card 3",
        "description": "<p> </p>\n\n<p><big><strong>Bài tập</strong></big></p>\n\n<p style=\"line-height: 25.6px;\">Hoàn thành&nbsp;ứng dụng Memory Card.</p>\n\n<p style=\"line-height: 25.6px;\"> </p>\n\n<p><big><strong>Yêu cầu</strong></big></p>\n\n<p>- Tạo nút start game, khi người dùng bấm vào thì bắt đầu tính thời gian chơi game (có thể tạo 2 trang khác nhau hoặc có nhiều chế độ chơi khác nhau). Khi hết thời gian mà người dùng chưa chọn hết các cặp bài thì hiển thị thông báo thua cuộc và ngược lại. Sau khi trò chơi kết thúc thì không tiếp tục tính thời gian nữa (có thể thêm 1 nút Chơi lại để refresh lại game).</p>\n\n<p>- Có hiển thị thời gian chơi (thời gian đếm ngược hoặc progressbar).</p>\n\n<p>- Có hiệu ứng âm thanh và hình ảnh&nbsp;khi người chơi thắng hoặc thua.</p>\n\n<p> </p>\n\n<p><big><strong>Gợi ý</strong></big></p>\n\n<p>- Có thể dùng ProgressBar của HTML5 và dùng Javascript (jQuery) để thay đổi giá trị của nó theo thời gian. Ví dụ:</p>\n\n<pre>\n<code class=\"language-html\">&lt;!-- ProgressBar với giá trị là 80% --&gt;\n&lt;progress max=\"100\" value=\"80\"&gt;&lt;/progress&gt;</code></pre>\n\n<p>- Tham khảo gameplay: <a href=\"https://robinhuy.github.io/memory-card/\" target=\"_blank\">https://robinhuy.github.io/memory-card/</a></p>\n\n<p>- Do game sử dụng nhiều hình ảnh nên nén hết lại để giảm bớt dung lượng:&nbsp;<a href=\"https://tinypng.com/\" target=\"_blank\">https://tinypng.com/</a></p>\n"
      },
      {
        "id": 2202,
        "title": "BT: Ứng dụng menu đa cấp vào trang web",
        "description": "<h3> </h3>\n\n<p><big><strong>Bài tập</strong></big></p>\n\n<p style=\"line-height: 25.6px;\">Một ông chủ quán ăn (quán cafe, quán&nbsp;bia&nbsp;...)&nbsp;muốn mở&nbsp;một website để quảng cáo cho quán ăn và&nbsp;các món ăn trong quán. Nhiệm vụ của bạn là xây dựng một website về quán ăn sao cho thật đẹp và thu hút khách hàng</p>\n\n<p style=\"line-height: 25.6px;\"> </p>\n\n<p><big><strong>Yêu cầu</strong></big></p>\n\n<p style=\"line-height: 25.6px;\">- Trang chủ: Hiển thị một số thông tin quảng cáo, khuyến mãi, món ăn nổi bật, ... với các hình ảnh đẹp, kích thích thị giác</p>\n\n<p style=\"line-height: 25.6px;\">- Trang web sử dụng&nbsp;<strong>menu đa cấp</strong>&nbsp;(dọc hoặc ngang)&nbsp;là danh mục các món ăn. Khi bấm vào 1 danh mục thì sẽ chuyển qua trang danh sách món ăn, hiển thị các món ăn thuộc danh mục đó</p>\n\n<p style=\"line-height: 25.6px;\">- Tại trang&nbsp;<u>Danh sách món ăn</u>, khi bấm vào một món ăn sẽ chuyển qua trang chi tiết món ăn, hiển thị thông tin chi tiết của món ăn đó</p>\n\n<p style=\"line-height: 25.6px;\">- Một số trang thông tin thêm như: Thông tin về quán, liên hệ, tin tức, khuyến mãi, ...</p>\n"
      },
      {
        "id": 1938,
        "title": "BT: Tạo 1 trang HTML đơn giản",
        "description": "<p> </p>\n\n<p><big><strong>Bài tập</strong></big></p>\n\n<p style=\"line-height: 25.6px;\">Tạo một trang HTML trình bày một bài viết từ 3 - 5 đoạn văn.</p>\n\n<p style=\"line-height: 25.6px;\"> </p>\n\n<p><big><strong>Yêu cầu</strong></big></p>\n\n<p style=\"line-height: 25.6px;\">- Bài viết phải có nội dung thực sự</p>\n\n<p style=\"line-height: 25.6px;\">- Có sử dụng các thẻ heading (ít nhất 3 thẻ), paragraph, các thẻ format text, special characters</p>\n"
      },
      {
        "id": 2118,
        "title": "BT: Thực hành Link + Image",
        "description": "<h3> </h3>\n\n<p><big><strong>Bài tập</strong></big></p>\n\n<p>- Tạo 1 trang HTML hiển thị <u>danh sách sản phẩm</u> bao gồm tên và ảnh của ít nhất&nbsp;10&nbsp;loại sản phẩm (sản phẩm tự chọn tùy ý, không cần style đẹp)</p>\n\n<p>- Khi bấm vào ảnh hoặc tên sản phẩm&nbsp;sẽ hiển thị ra trang <u>chi tiết sản phẩm</u> bao gồm: Ảnh của sản phẩm và các thông tin của sản phẩm</p>\n\n<p> </p>\n\n<p><big><strong>Yêu cầu</strong></big></p>\n\n<p>- Sử dụng ảnh to, rõ ràng (kích thước ảnh phải lớn hơn <strong>500x500 pixels</strong>)</p>\n\n<p>- Ảnh ở trang danh sách sản phẩm có kích thước không được lớn hơn&nbsp;<strong>300x300 pixels</strong></p>\n\n<p>- Ảnh ở trang <u>chi tiết sản phẩm</u> có kích thước không được lớn hơn&nbsp;<strong>500x500 pixels</strong> và khi bấm vào ảnh hoặc tên sản phẩm sẽ quay trở lại trang <u>danh sách sản phẩm</u> ở vị trí của sản phẩm đó (link đến vị trí trong trang)</p>\n\n<p> </p>\n\n<p><big><strong>Chú ý</strong></big></p>\n\n<p>- Do bài tập yêu cầu sử dụng nhiều file, nhiều trang html nên các bạn không nộp bài tập qua&nbsp;http://jsfiddle.net/&nbsp;hoặc&nbsp;http://codepen.io/&nbsp;nữa mà sử dụng&nbsp;<a href=\"https://github.com/\" target=\"_blank\">https://github.com/</a>. Xem lại hướng dẫn tại đây: <a href=\"http://techmaster.vn/posts/33569/host-static-website-voi-github\" target=\"_blank\">http://techmaster.vn/posts/33569/host-static-website-voi-github</a>. Chú ý đặt tên repository trùng với tên tài khoản, mỗi bài tập sẽ để vào 1 folder. Ví dụ repository <strong>robinhuy.github.io</strong>, thư mục<strong> link-image</strong>,<strong> </strong>file bài tập là<strong> index.html</strong>, link truy cập sẽ là&nbsp;<u style=\"line-height:25.6px\">robinhuy.github.io/link-image/index.html</u> hoặc <u style=\"line-height:25.6px\">robinhuy.github.io/link-image/</u></p>\n\n<p>- Lệnh command line tham khảo nếu dùng <strong>terminal</strong> hoặc <strong>git shell</strong>:&nbsp;</p>\n\n<pre>\n<code class=\"language-bash\">cd [folder_bai_tap]\ngit init\ngit remote add origin [link_repository]\ngit add .\ngit commit\ngit push -u origin master</code></pre>\n\n<p>- Để nắm rõ hơn về Git các bạn có thể truy cập trang&nbsp;<a href=\"http://learngitbranching.js.org/\" target=\"_blank\">http://learngitbranching.js.org/</a></p>\n\n<h3> </h3>\n\n<p><big><strong>Gợi ý</strong></big></p>\n\n<p>- Trên trang web thật (ví dụ robinhuy.github.io), nên sử dụng đường dẫn tương đối hoặc đường dẫn&nbsp;gốc tương&nbsp;đối, ví dụ: \"/img/my-image.png\" sẽ&nbsp;tương đương với \"robinhuy.github.io/img/my-image.png\"</p>\n\n<p>- Không nên fix cứng kích thước ảnh (có thể fix cứng 1 chiều) để tránh bị méo ảnh</p>\n\n<p>- Khung layout nên có kích thước khoảng 1000 pixels để xem được trên tất cả các màn hình desktop&nbsp;(ở các giao diện cũ thường là 960 pixels vì dễ chia khối bên trong theo nhiều tỉ lệ khác nhau)</p>\n"
      },
      {
        "id": 2448,
        "title": "BT: Memory card 2",
        "description": "<p> </p>\n\n<p><big><strong>Bài tập</strong></big></p>\n\n<p style=\"line-height: 25.6px;\">Tiếp tục hoàn thiện ứng dụng Memory Card.&nbsp;Khi người chơi&nbsp;chọn bài, kiểm tra xem có giống với lá bài trước đó không, nếu giống thì ẩn 2 lá bài đi, nếu khác thì úp ngược lại. Hành động úp bài và ẩn bài phải có thời gian delay để người chơi nhìn rõ quân bài.</p>\n\n<p style=\"line-height: 25.6px;\"> </p>\n\n<p><big><strong>Yêu cầu</strong></big></p>\n\n<p>- Quân bài nào đang ngửa thì không bấm vào được (tránh trường hợp người chơi&nbsp;chọn đi chọn lại 1 quân bài).</p>\n\n<p>- Có hiệu ứng âm thành và hình ảnh&nbsp;khi người chơi&nbsp;chọn đúng hoặc chọn sai.</p>\n\n<p> </p>\n\n<p><big><strong>Gợi ý</strong></big></p>\n\n<p>- Có thể dùng CSS để không cho người chơi&nbsp;click vào 1 element.&nbsp;</p>\n\n<pre>\n<code class=\"language-javascript\">// Không cho bấm vào element $('.card')\n$('.card').css('pointer-events', 'none');\n\n// Cho phép bấm vào element $('.card')\n$('.card').css('pointer-events', 'auto');\n</code></pre>\n\n<p>- Để sử dụng âm thanh trong ứng dụng có thể dùng thẻ <strong>&lt;audio&gt;</strong>. Tham khảo các hàm xử lý audio của HTML5:<br />\n<a href=\"http://www.w3schools.com/tags/ref_av_dom.asp\" target=\"_blank\">http://www.w3schools.com/tags/ref_av_dom.asp​</a>.<br />\nVí dụ:&nbsp;</p>\n\n<pre>\n<code class=\"language-html\">&lt;audio id=\"bg-music\"&gt;\n    &lt;source src=\"audio/music.mp3\" type=\"audio/mpeg\"&gt;\n&lt;/audio&gt;</code></pre>\n\n<p>Chạy đoạn audio trên bằng function (sử dụng Javascript thuần):&nbsp;</p>\n\n<pre>\n<code class=\"language-javascript\">document.getElementById('bg-music').play();</code></pre>\n"
      },
      {
        "id": 2114,
        "title": "BT: Thực hành selectors",
        "description": "<h3> </h3>\n\n<p><big><strong>Bài tập</strong></big></p>\n\n<p>- Tạo một trang HTML với nội dung là một đơn xin việc (đơn xin học, bản kiểm điểm, ...)&nbsp;và trang trí cho đẹp</p>\n\n<p>- Mẫu code HTML (có thể dùng lại nhưng cần thay đổi&nbsp;thông tin, nội dung cho phù hợp)</p>\n\n<pre>\n<code class=\"language-html\">&lt;html&gt;\n&lt;head&gt;\n    &lt;title&gt;Đơn xin việc&lt;/title&gt;\n    &lt;meta charset=\"UTF-8\"/&gt;\n&lt;/head&gt;\n\n&lt;body&gt;\n&lt;h2&gt;\n    Cộng Hoà Xã Hội Chủ Nghĩa Việt Nam&lt;br/&gt;\n    Độc lập - Tự do - Hạnh phúc\n&lt;/h2&gt;\n\n&lt;p&gt;.....o0o.....&lt;/p&gt;\n\n&lt;h1&gt;ĐƠN ỨNG TUYỂN&lt;/h1&gt;\n\n&lt;p&gt;Kính gửi: ............................................&lt;/p&gt;\n\n&lt;p&gt;Tên tôi là: ............................................&lt;/p&gt;\n\n&lt;p&gt;Sinh năm: ............................................&lt;/p&gt;\n\n&lt;p&gt;Địa chỉ: ............................................&lt;/p&gt;\n\n&lt;p&gt;Qua thông tin đăng trên techmaster.vn tôi được biết hiện nay Quý công ty đang có nhu cầu tuyển dụng Lập trình viên web Frontend. Với kiến thức và kinh nghiệm tích lũy được tôi nghĩ rằng tôi ứng tuyển vị trí này rất thích hợp.&lt;/p&gt;\n\n&lt;p&gt;Tôi tốt nghiệp Cử nhân chuyên ngành Công nghệ thông tin tại &lt;b&gt;trường ĐH ABC&lt;/b&gt;. Sau khi tốt nghiệp tôi làm việc ở vị trí Lập trình viên tại &lt;b&gt;Công ty chuyên sản xuất và gia công phần mềm DEF&lt;/b&gt;. Tại vị trí này tôi tham gia phát triển các dự án ứng dụng web Frontend trên nền tảng &lt;b&gt;HTML5, CSS3 và Javascript&lt;/b&gt;.&lt;/p&gt;\n\n&lt;p&gt;Tôi cũng hiểu rằng vị trí này đòi hỏi ứng viên có khả năng làm việc bằng tiếng Anh khá, khả năng chịu được áp lực công việc cũng như làm việc nhóm tốt. Tôi tin với khả năng của mình có thể hoàn thành tốt nhiệm vụ Quý công ty giao phó.&lt;/p&gt;\n\n&lt;p&gt;Tôi hy vọng có cơ hội được tham gia và đóng góp công sức vào sự phát triển của Quý công ty. Mọi liên hệ về lịch phỏng vấn hay thông tin về hồ sơ ứng tuyển này, xin vui lòng liên lạc số điện thoại: ...&lt;/p&gt;\n\n&lt;p&gt;Xin chân thành cảm ơn và trân trọng kính chào!&lt;/p&gt;\n\n&lt;p&gt;Hà Nội, ngày ... tháng ... năm 20...&lt;/p&gt;\n\n&lt;p&gt;Người làm đơn&lt;/p&gt;\n&lt;p&gt;.............&lt;/p&gt;\n&lt;/body&gt;\n&lt;/html&gt;\n</code></pre>\n\n<p> </p>\n\n<p><big><strong>Yêu cầu</strong></big></p>\n\n<p>- Sử dụng CSS selectors để căn chỉnh lại trang HTML như: căn lề, căn vị trí, kích thước, màu sắc&nbsp;... (Không dùng inline style)</p>\n\n<p>- Sử dụng cả <strong>class selector</strong> và <strong>id selector</strong></p>\n"
      },
      {
        "id": 2958,
        "title": "BT vẽ hình",
        "description": "<p> </p>\n\n<p>Bài tập nâng cao dành cho những ai muốn luyện tập khả năng tư duy logic cũng như sử dụng các lệnh vòng lặp, điều kiện một&nbsp;cách thuần thục. Các bài tập này sẽ làm theo phong cách của C/C++, dùng các lệnh điều kiện, vòng lặp để in ra màn hình các hình vẽ theo tham số bất kỳ.</p>\n\n<p>Ví dụ: Viết function <strong>printSquare()&nbsp;</strong>có tác dụng in ra màn hình 1 hình vuông được tạo bởi các dấu <strong>* ,</strong> với tham số truyền vào là 1 số integer &gt; 0&nbsp;biểu thị kích thước của hình vuông&nbsp;</p>\n\n<pre>\n<code class=\"language-javascript\">function printSquare(n) {\n  var str = '';\n\n  for (var i = 0; i &lt; n; i ++) {\n    for (var j = 0; j &lt; n; j++) {\n      // In ra n dấu *\n      str += ' * ';\n    }\n\n    // In ra dấu xuống dòng\n    str += '&lt;br/&gt;';\n  }\n\n  return str;\n}\n\n</code></pre>\n\n<p>Gọi hàm&nbsp;</p>\n\n<pre>\n<code>document.write(printSquare(3));\n\n// Kết quả\n* * * \n* * * \n* * * \n\ndocument.write(printSquare(5));\n\n// Kết quả\n* * * * *\n* * * * *\n* * * * *\n* * * * *\n\n</code></pre>\n\n<p> </p>\n\n<p><big><strong>Bài tập</strong></big></p>\n\n<p><strong>Bài&nbsp;1.</strong> Viết funciton <strong>printTrigangle(n)</strong>, với n là số integer &gt; 2, in ra màn hình 1 hình tam giác vuông cân có kích thước n. Ví dụ:&nbsp;</p>\n\n<pre>\n<code>// Với n = 4\n*\n* *\n* * *\n* * * *</code></pre>\n\n<p><strong>Bài&nbsp;2</strong>. Viết function <strong>printEmptyRectangle(a, b)</strong>, với a và b là 2 số integer &gt; 3, in ra một hình chữ nhật rỗng có kích thước a x b. Ví dụ:&nbsp;</p>\n\n<pre>\n<code>// Với a = 5, b = 3\n* * * * *\n*       *\n* * * * *</code></pre>\n\n<p><strong>Bài 3.</strong> Viết function <strong>printSpecialTrigangle(n),</strong> với n là số integer &gt; 1, in ra hình tam giác cân&nbsp;ngược với chiều cao bằng n. Ví dụ:&nbsp;</p>\n\n<pre>\n<code>// Với n = 3\n* * * * *\n  * * *\n    *</code></pre>\n\n<p><strong>Bài 4.</strong> Viết function <strong>printX(n)</strong>, với n là số integer &gt; 3 và là số lẻ, in ra hình chữ X có chiều cao bằng n. Ví dụ:&nbsp;</p>\n\n<pre>\n<code>// Với n = 5\n*   *\n * *\n  *\n * *\n*   *</code></pre>\n\n<p><strong>Bài 5.</strong>&nbsp;Viết function <strong>printButterfly(n)</strong>, với n là số integer &gt; 3 và là số lẻ, in ra hình con bướm có chiều cao bằng&nbsp;n. Ví dụ:&nbsp;</p>\n\n<pre>\n<code>// Với n = 5\n*       *\n* *   * *\n* * * * *\n* *   * *\n*       *</code></pre>\n\n<p> </p>\n\n<p><big><strong>Luyện tập</strong></big></p>\n\n<p>Luyện tập thêm về thuật toán tại freecodecamp:&nbsp;<a href=\"https://www.freecodecamp.com/challenges/sum-all-numbers-in-a-range\" target=\"_blank\">Intermediate Algorithm</a> và <a href=\"https://www.freecodecamp.com/challenges/validate-us-telephone-numbers\" target=\"_blank\">Advanced Algorithm</a></p>\n"
      },
      {
        "id": 2176,
        "title": "Thư viện Font Awesome",
        "description": "<p style=\"line-height: 25.6px;\"> </p>\n\n<p style=\"line-height: 25.6px;\"><big><strong>Hướng dẫn</strong></big></p>\n\n<p style=\"line-height: 25.6px;\">- Để tạo ra các icon trên trang web một cách dễ dàng, chúng ta có thể sử dụng thư viện Font Awesome. Đó là 1 bộ font nhưng với các ký tự là các icon. Tạo icon theo cách này sẽ có những lợi ích rất lớn mà 1 ảnh không làm được như:</p>\n\n<ul>\n\t<li style=\"line-height: 25.6px;\">Dung lượng nhỏ, tùy chỉnh kích thước tùy ý mà không bị vỡ hình</li>\n\t<li style=\"line-height: 25.6px;\">Áp dụng được các thuộc tính CSS dành cho font như: màu sắc, đổ bóng, ...</li>\n</ul>\n\n<p>- Cài đặt:</p>\n\n<ol>\n\t<li>Truy cập trang <a href=\"http://fortawesome.github.io/Font-Awesome/\" target=\"_blank\">http://fortawesome.github.io/Font-Awesome/</a>&nbsp;và chọn Download.</li>\n\t<li>Giải nén ra và copy toàn bộ file css, file font vào trong project.</li>\n\t<li>Link đến file css&nbsp;<strong>font-awesome.min.css</strong></li>\n</ol>\n\n<p>- Sử dụng: Sử dụng các class sẵn có lên trên các inline element như &lt;i&gt;, &lt;b&gt;, ... Ví dụ:</p>\n\n<pre>\n<code class=\"language-html\">Đây là icon cốc bia &lt;i class=\"fa fa-beer\"&gt;&lt;/i&gt; &lt;br/&gt;\nĐây là icon quyển sách &lt;i class=\"fa fa-book\"&gt;&lt;/i&gt;</code></pre>\n\n<p>&nbsp;- Tham khảo danh sách các icon của Font Awesome: <a href=\"http://fortawesome.github.io/Font-Awesome/icons/\" target=\"_blank\">http://fortawesome.github.io/Font-Awesome/icons/</a></p>\n\n<p> </p>\n\n<p><strong><big>Bài tập</big></strong></p>\n\n<p>Làm lại bài tập \"Trang Quán Ăn\" (BT: Ứng dụng menu đa cấp vào trang web), sử dụng 1 trong các font sau: Andika, Arimo, Gentium, Maven Pro, Roboto, Tinos hoặc một font mà trình duyệt web không hỗ trợ sẵn (khi nộp bài cần chú thích font sử dụng). Ngoài ra còn sử dụng các icon bằng&nbsp;Font Awesome.</p>\n\n<p> </p>\n\n<p><big><strong>Yêu cầu</strong></big></p>\n\n<p>- Font phải hiển thị được trên các trình duyệt phổ biến.</p>\n\n<p>- Trình bày đẹp, nộp bài tập lên github static page.</p>\n"
      },
      {
        "id": 2809,
        "title": "BT: Cắt HTML, CSS từ file PSD",
        "description": "<p> </p>\n\n<p><big><strong>Bài tập</strong></big></p>\n\n<p>- Chọn 1 mẫu PSD từ trang&nbsp;sau và tạo 1 trang web responsive từ mẫu đó:&nbsp;<a href=\"http://freebiesbug.com/psd-freebies/website-template/\" target=\"_blank\">http://freebiesbug.com/psd-freebies/website-template/</a></p>\n\n<p>- Chú ý có tổng cộng 9 trang và không được chọn mẫu có sẵn code HTML</p>\n\n<p> </p>\n\n<p><big><strong>Yêu cầu</strong></big></p>\n\n<p>- Cắt chính xác theo thiết kế (sai số tối đa 4 pixels)</p>\n\n<p>- Có responsive</p>\n\n<p>- Nộp bài tập lên Github static page và phải chú thích kèm link PSD</p>\n\n<p> </p>\n\n<p><big><strong>Tham khảo</strong></big></p>\n\n<p>Một số trang web hỗ trợ CSS:</p>\n\n<ul>\n\t<li><a href=\"http://css3gen.com/box-shadow/\" style=\"line-height: 25.6px;\" target=\"_blank\">css3gen.com/box-shadow</a>&nbsp;- Tạo hiệu ứng đổ bóng</li>\n\t<li><a href=\"http://apps.eky.hk/css-triangle-generator/\" style=\"line-height: 25.6px;\" target=\"_blank\">apps.eky.hk/css-triangle-generator</a>&nbsp;-&nbsp;Tạo hình tam giác, mũi tên</li>\n\t<li><a href=\"http://www.colorzilla.com/gradient-editor/\" style=\"line-height: 25.6px;\" target=\"_blank\">colorzilla.com/gradient-editor</a>&nbsp;-&nbsp;Tạo ra các hiệu ứng, màu sắc gradient phức tạp</li>\n</ul>\n"
      },
      {
        "id": 2116,
        "title": "BT: Tạo bảng dữ liệu, sắp xếp dữ liệu",
        "description": "<h3> </h3>\n\n<p><big><strong>Bài tập</strong></big></p>\n\n<p>Tạo 1 trong các bảng dữ liệu với các thông tin sau:</p>\n\n<p>- Bảng danh sách học viên (nhân viên, thành viên, ...)&nbsp;bao gồm: Ảnh chân dung, tên học viên, giới tính, email, số điện thoại, ...</p>\n\n<p>- Bảng danh sách sản phẩm bao gồm: Ảnh sản phẩm, tên sản phẩm, mã sản phẩm, giá tiền, số lượng, ...</p>\n\n<p>- Bảng danh sách bài viết bao gồm: Tiêu đề bài viết, danh mục, tác giả, ngày tạo,&nbsp;ngày xuất bản,&nbsp;trạng thái (bản nháp hoặc xuất bản), ...</p>\n\n<p> </p>\n\n<p><big><strong>Yêu cầu</strong></big></p>\n\n<p>- Trình bày đẹp, rõ ràng</p>\n\n<p>- Khi di chuột lên dòng nào thì highlight dòng đó lên</p>\n\n<p>- Có chức năng sort (sắp xếp lại dữ liệu trong bảng theo các cột)</p>\n"
      }
    ]
  }
}


const namespaced = {
  namespaced: true
};

const state = {
  searching: false,
  keyword: '',
  data: []
};

const getters = {
  getSearching: state => state.searching,
  getKeyword: state => state.keyword,
  getData: state => state.data

};


const actions = {
  search: ({commit, dispatch}, {keyword}) => {
    commit(types.SET_KEYWORD, {
      keyword: keyword
    });

    if (keyword === '') {
      dispatch('clearSearch')
    } else {

      dispatch('clearSearch');

      axios.get('/repositories', {
        baseURL: 'https://api.github.com/search/',
        params: {
          q: keyword
        },
        transformRequest: [
          data => {
            commit(types.SET_SEARCHING, {
              searching: true
            });
            return data
          }
        ],
        transformResponse: [
          data => {
            commit(types.SET_SEARCHING, {
              searching: false
            });
            return data
          }
        ],
        responseType: 'json'
      })
        .then(response => {
          // su dung data: response.data de lay data tu server
          // su dung data: pattern_data.data de fake du lieu
          commit(types.SET_DATA, {
//          data: response.data
            data: pattern_data.data.items
          })
        }).catch(error => console.log(error))
    }
  },
  clearSearch({commit}){
    commit(types.CLEAR_SEARCH_DATA)
  }

}


const mutations = {
  //set keyword
  [types.SET_KEYWORD](state, payload){
    state.keyword = payload.keyword
  },
  //set_searching
  [types.SET_SEARCHING](state, payload) {
    state.searching = payload.searching
  },
  // set_data
  [types.SET_DATA](state, payload) {
    state.data = payload.data
  },
  [types.CLEAR_SEARCH_DATA](state){
    state.data = []
  }
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
}


