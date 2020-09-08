(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{816:function(t,a,s){"use strict";s.r(a);var r=s(114),v=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mysql数据库索引选择使用b-树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql数据库索引选择使用b-树"}},[t._v("#")]),t._v(" MySQL数据库索引选择使用B+树")]),t._v(" "),s("p",[t._v("在进一步分析为什么MySQL数据库索引选择使用B+树之前，我相信很多小伙伴对数据结构中的树还是有些许模糊的，因此我们由浅入深一步步探讨树的演进过程，在一步步引出B树以及为什么MySQL数据库索引选择使用B+树！")]),t._v(" "),s("p",[t._v("学过数据结构的一般对最基础的树都有所认识，因此我们就从与我们主题更为相近的二叉查找树开始。")]),t._v(" "),s("h2",{attrs:{id:"二叉查找树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二叉查找树"}},[t._v("#")]),t._v(" 二叉查找树")]),t._v(" "),s("h3",{attrs:{id:"二叉树简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二叉树简介"}},[t._v("#")]),t._v(" 二叉树简介")]),t._v(" "),s("p",[t._v("二叉查找树也称为"),s("strong",[t._v("有序二叉查找树")]),t._v("，满足二叉查找树的一般性质，是指一棵空树具有如下性质：")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("任意节点左子树不为空,则左子树的值均小于根节点的值；")])]),t._v(" "),s("li",[s("strong",[t._v("任意节点右子树不为空,则右子树的值均大于于根节点的值；")])]),t._v(" "),s("li",[s("strong",[t._v("任意节点的左右子树也分别是二叉查找树；")])]),t._v(" "),s("li",[s("strong",[t._v("没有键值相等的节点；")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/zwhGithub/images/master/img/20191231161055.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"局限性及应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#局限性及应用"}},[t._v("#")]),t._v(" 局限性及应用")]),t._v(" "),s("p",[t._v("一个二叉查找树是由n个节点随机构成，所以，对于某些情况，二叉查找树会退化成一个有n个节点的线性链。如下图：\n"),s("img",{attrs:{src:"https://raw.githubusercontent.com/zwhGithub/images/master/img/20191231161258.png",alt:""}})]),t._v(" "),s("p",[t._v("大家看上图，如果我们的根节点选择是最小或者最大的数，那么二叉查找树就完全退化成了线性结构。上图中的平均查找次数为（1+2+3+4+5+5）/6=3.16次，和顺序查找差不多。显然这个二叉树的查询效率就很低，因此若想最大性能的构造一个二叉查找树，需要这个二叉树是平衡的（这里的平衡从一个显著的特点可以看出这一棵树的高度比上一个输的高度要大，在相同节点的情况下也就是不平衡），从而引出了一个新的定义-平衡二叉树AVL。")]),t._v(" "),s("h3",{attrs:{id:"平衡二叉树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#平衡二叉树"}},[t._v("#")]),t._v(" 平衡二叉树")]),t._v(" "),s("p",[t._v("平衡二叉树又称AVL树，在满足二叉查找树特性的基础上，要求每个节点的左右子树的高度差不能超过1。")]),t._v(" "),s("p",[t._v("和内存相比，从磁盘中读取数据的速度会慢上百倍千倍甚至万倍，所以，我们应当尽量减少从磁盘中读取数据的次数。 另外，从磁盘中读取数据时，都是按照磁盘块来读取的，并不是一条一条的读。")]),t._v(" "),s("p",[t._v("如果我们能把尽量多的数据放进磁盘块中，那一次磁盘读取操作就会读取更多数据，那我们查找数据的时间也会大幅度降低。")]),t._v(" "),s("p",[t._v("如果我们用树这种数据结构作为索引的数据结构，那我们每查找一次数据就需要从磁盘中读取一个节点，也就是我们说的一个磁盘块，我们都知道平衡二叉树可是每个节点只存储一个键值和数据的。可以想象到二叉树的节点将会非常多，高度也会及其高，我们查找数据时也会进行很多次磁盘IO，我们查找数据的效率将会极低！")]),t._v(" "),s("p",[t._v("为了解决平衡二叉树的这个弊端，我们应该寻找一种单个节点可以存储多个键值和数据的平衡树。也就是我们接下来要说的B树。")]),t._v(" "),s("h2",{attrs:{id:"b树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#b树"}},[t._v("#")]),t._v(" B树")]),t._v(" "),s("p",[t._v("B树（Balance Tree）即为平衡树的意思，下图即是一颗B树。")]),t._v(" "),s("p",[s("strong",[t._v("B树相对于平衡二叉树，每个节点存储了更多的键值(key)和数据(data)，并且每个节点拥有更多的子节点，子节点的个数一般称为阶，上述图中的B树为3阶B树，高度也会很低。")])]),t._v(" "),s("h2",{attrs:{id:"b-树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#b-树"}},[t._v("#")]),t._v(" B+树")]),t._v(" "),s("h3",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("p",[t._v("B+树是应文件系统所需而产生的一种B树的变形树（文件的目录一级一级索引，只有最底层的叶子节点（文件）保存数据）非叶子节点只保存索引，不保存实际的数据，数据都保存在叶子节点中。")]),t._v(" "),s("h3",{attrs:{id:"b-树的性质"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#b-树的性质"}},[t._v("#")]),t._v(" B+树的性质")]),t._v(" "),s("ol",[s("li",[t._v("是多叉而不是二叉了，使用多叉的目的是降低树的高度;")]),t._v(" "),s("li",[t._v("每个节点不再只是存储一个key了，可以存储多个key；")]),t._v(" "),s("li",[t._v("非叶子节点存储key，叶子节点存储key和数据。")]),t._v(" "),s("li",[t._v("叶子节点两两相连，为顺序查询提供了帮助")])])])}),[],!1,null,null,null);a.default=v.exports}}]);