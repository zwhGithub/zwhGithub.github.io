(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{850:function(t,_,e){"use strict";e.r(_);var v=e(114),s=Object(v.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"explain-详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#explain-详解"}},[t._v("#")]),t._v(" Explain 详解")]),t._v(" "),e("p",[t._v("使用EXPLAIN关键字可以模拟优化器执行SQL查询语句，从而知道MySQL是如何处理你的SQL语句。分析你的查询预付或表结构的性能瓶颈。")]),t._v(" "),e("h2",{attrs:{id:"查询结果返回字段分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查询结果返回字段分析"}},[t._v("#")]),t._v(" 查询结果返回字段分析")]),t._v(" "),e("h3",{attrs:{id:"_1、id列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、id列"}},[t._v("#")]),t._v(" 1、id列")]),t._v(" "),e("p",[t._v("select查询的序列号，包含一组数字，表示查询中执行select子句或操作表的顺序。id如果相同，可以认为是一个分组，从上往下顺序执行。id不同，id值越大，优先级越高，越先执行。")]),t._v(" "),e("h3",{attrs:{id:"_2、select-type列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、select-type列"}},[t._v("#")]),t._v(" 2、select_type列")]),t._v(" "),e("p",[t._v("查询的类型，主要用于区别普通查询、联合查询、子查询等的复杂查询。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("id")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("select_type")]),t._v(" "),e("th",[t._v("ramark")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("SIMPLE")]),t._v(" "),e("td",[t._v("简单的select查询，查询中不包含子查询或UNION")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("PRIMARY")]),t._v(" "),e("td",[t._v("复杂查询中最外层的 select")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("SUBQUERY")]),t._v(" "),e("td",[t._v("在SELECT或WHERE列表中包含了子查询")])]),t._v(" "),e("tr",[e("td",[t._v("4")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("DERIVED")]),t._v(" "),e("td",[t._v("包含在 from 子句中的子查询。MySQL会将结果存放在一个临时表中，也称为派生表（derived的英文含义）")])]),t._v(" "),e("tr",[e("td",[t._v("5")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("UNION")]),t._v(" "),e("td",[t._v("若第二个SELECT出现在UNION之后，则被标记为UNION; 若UNION包含在FROM子句的子查询中，外层SELECT将被标记为：DERIVED")])]),t._v(" "),e("tr",[e("td",[t._v("6")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("UNION RESULT")]),t._v(" "),e("td",[t._v("从UNION表获取结果的SELECT")])])])]),t._v(" "),e("h3",{attrs:{id:"_3、table列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、table列"}},[t._v("#")]),t._v(" 3、table列")]),t._v(" "),e("p",[t._v("表示查询涉及的表或衍生表。\n注意：MySQL对待这些表和普通表一样，但是这些“临时表”是没有任何索引的。")]),t._v(" "),e("h3",{attrs:{id:"_4、type列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、type列"}},[t._v("#")]),t._v(" 4、type列")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("type显示的是访问类型，是较为重要的一个指标，结果值从好到坏依次是：一般来说，得保证查询至少达到range级别，最好能达到const。")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("type")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("All")]),t._v(" "),e("td",[t._v("最坏的情况, 全表扫描")])]),t._v(" "),e("tr",[e("td",[t._v("index")]),t._v(" "),e("td",[t._v("和ALL一样，不同就是mysql只需扫描索引树，这通常比ALL快一些")])]),t._v(" "),e("tr",[e("td",[t._v("range")]),t._v(" "),e("td",[t._v("范围扫描通常出现在 in(), between , > , <, >= 等操作中。使用一个索引来检索给定范围的行")])]),t._v(" "),e("tr",[e("td",[t._v("ref")]),t._v(" "),e("td",[t._v("不使用唯一索引，而是使用普通索引或者唯一性索引的部分前缀，索引要和某个值相比较，可能会找到多个符合条件的行")])]),t._v(" "),e("tr",[e("td",[t._v("eq_ref")]),t._v(" "),e("td",[t._v("primary key 或 unique key 索引的所有部分被连接使用 ，最多只会返回一条符合条件的记录。这可能是在 const 之外最好的联接类型了")])]),t._v(" "),e("tr",[e("td",[t._v("const")]),t._v(" "),e("td",[t._v("表示通过索引一次就找到了, const用于比较primary key或者unique索引。因为只匹配一行数据，所以很快。如将主键置于where列表中，MySQL就能将该查询转换为一个常量")])]),t._v(" "),e("tr",[e("td",[t._v("system")]),t._v(" "),e("td",[t._v("表中只有一条数据. 这个类型是特殊的 "),e("code",[t._v("const")]),t._v(" 类型")])])])]),t._v(" "),e("h3",{attrs:{id:"_5、possible-keys列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、possible-keys列"}},[t._v("#")]),t._v(" 5、possible_keys列")]),t._v(" "),e("p",[t._v("表示 MySQL 在查询时, 能够使用到的索引. 注意, 即使有些索引在 possible_keys 中出现, 但是并不表示此索引会真正地被 MySQL 使用到. MySQL 在查询时具体使用了哪些索引, 由 key 字段决定。")]),t._v(" "),e("h3",{attrs:{id:"_6、key列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6、key列"}},[t._v("#")]),t._v(" 6、key列")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("此字段是 MySQL 在当前查询时所真正使用到的索引。")])]),t._v(" "),e("h3",{attrs:{id:"_7、key-len列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7、key-len列"}},[t._v("#")]),t._v(" 7、key_len列")]),t._v(" "),e("ul",[e("li",[t._v("表示索引中使用的字节数，可通过该列计算查询中使用的索引的长度，key_len显示的值为索引字段的最大可能长度，并非实际使用长度，即key_len是根据表定义计算而得，不是通过表内检索出的。")]),t._v(" "),e("li",[t._v("EXPLAIN执行计划中有一列 key_len 用于表示本次查询中，所选择的索引长度有多少字节，通常我们可借此判断联合索引有多少列被选择了。")])]),t._v(" "),e("h3",{attrs:{id:"_8、rows列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8、rows列"}},[t._v("#")]),t._v(" 8、rows列")]),t._v(" "),e("p",[t._v("这一列是mysql估计要读取并检测的行数，这个值非常直观显示 SQL 的效率好坏, 原则上 rows 越少越好，注意这个不是结果集里的行数。")]),t._v(" "),e("h3",{attrs:{id:"_9、extra列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9、extra列"}},[t._v("#")]),t._v(" 9、Extra列")]),t._v(" "),e("blockquote",[e("p",[t._v("这一列展示的是额外信息。常见的重要值如下：")])]),t._v(" "),e("ul",[e("li",[t._v("Using temporary 查询有使用临时表, 一般出现于排序, 分组和多表 join 的情况, 查询效率不高, 建议优化。")]),t._v(" "),e("li",[t._v('Using index "覆盖索引扫描", 表示查询在索引树中就可查找所需数据, 不用扫描表数据文件, 往往说明性能不错。')]),t._v(" "),e("li",[t._v("Using filesort 当 Extra 中有 Using filesort 时, 表示 MySQL 需额外的排序操作, 不能通过索引顺序达到排序效果. 一般有 Using filesort, 都建议优化去掉, 因为这样的查询 CPU 资源消耗大。")]),t._v(" "),e("li",[t._v("Using where")])])])}),[],!1,null,null,null);_.default=s.exports}}]);