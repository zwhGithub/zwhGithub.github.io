(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{818:function(a,s,t){"use strict";t.r(s);var r=t(114),e=Object(r.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"mysql之crc32函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql之crc32函数"}},[a._v("#")]),a._v(" MySQL之crc32函数")]),a._v(" "),t("h2",{attrs:{id:"crc32函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#crc32函数"}},[a._v("#")]),a._v(" crc32函数")]),a._v(" "),t("h3",{attrs:{id:"概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[a._v("#")]),a._v(" 概念")]),a._v(" "),t("p",[a._v("CRC全称为Cyclic Redundancy Check，又叫循环冗余校验。CRC32是CRC算法的一种，常用于校验网络上传输的文件。")]),a._v(" "),t("h3",{attrs:{id:"crc32来加快查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#crc32来加快查询"}},[a._v("#")]),a._v(" CRC32来加快查询")]),a._v(" "),t("p",[a._v("CRC32的基本特征：")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("CRC32函数返回值的范围是0-4294967296（2的32次方减1)")])]),a._v(" "),t("li",[t("p",[a._v("相比MD5，CRC32函数很容易碰撞")])])]),a._v(" "),t("h3",{attrs:{id:"crc32的使用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#crc32的使用场景"}},[a._v("#")]),a._v(" CRC32的使用场景")]),a._v(" "),t("p",[a._v("由上述两个基本特性可知，MySQL CRC32 生成整型结果使用用INT存储，而MD5需要varchar来存储。但是CRC32很容易碰撞，这适合做索引么？")]),a._v(" "),t("p",[a._v("场景：我们在做一个爬虫，对于一个URL，先去数据库里查询是否存在，如果不存在，插入到数据库中。大家都知道这种类型应用表会增长非常迅速，如果简单的")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" urls "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" url "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'https://www.wechat.com'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("会每次全表扫描，效率非常低。如果在url列上面加索引会快一些，但由于url是varchar类型，字段本身的存储空间和索引占用的存储空间都比较大。")]),a._v(" "),t("p",[a._v("如果"),t("strong",[a._v("加一个crc32_url列，并且只在这个列上加索引，索引空间就会小很多,并使用整型加速查询速度避免字符串url全表扫描。")])]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" urls "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" crc_url "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("907060870")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("上面这种做法一定不可以，因为前面已经提到crc32函数会产生碰撞，也就是说值为907060870的不止有上面那个字符。一个小技巧是只使用crc32列来过滤：")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" urls "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" crc_url "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("907060870")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("AND")]),a._v(" url "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'hello'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("这样一来，大部分查询还是只需要扫描一行就获得结果。对于少部分碰撞的记录，只需要多扫描几行也可以正确获得结果。 url的场景从varchar到INT的优化其实效果不是特别明显。另一个例子是文本，假如我们有一个text类型的字段（文章内容、评论、微博之类），每次插入之前要判断一下这个内容是否在数据库里存在了。如果使用crc32的技巧，改善的空间还是蛮大的。")]),a._v(" "),t("h2",{attrs:{id:"实际使用示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实际使用示例"}},[a._v("#")]),a._v(" 实际使用示例")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INSERT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INTO")]),a._v(" test "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("VALUES")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'aaaaaaaa'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" crc32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'aaaaaaaa'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SELECT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" test "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WHERE")]),a._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" crc32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'aaaaaaaa'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);