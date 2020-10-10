<template>
  <div class="swordImmortal">
    <lyyTable1 :seal="singleSeal" :title="title1"></lyyTable1>
    <lyyTable2 :seal="pairedSeal" :title="title2"></lyyTable2>
    <lyyTable3 :seal="specialSeal" :title="title3"></lyyTable3>
    <lyyTable4 :seal="otherSeal" :title="title4"></lyyTable4>
  </div>
</template>

<script>
import lyyTable from './components/lyyTable';
export default {
  name: '',
  components: {
    lyyTable1: lyyTable,
    lyyTable2: lyyTable,
    lyyTable3: lyyTable,
    lyyTable4: lyyTable
  },
  data () {
    return {
      singleSeal: [{
        seal: "最相思室。"
      }, {
        seal: "心系佳人，思之念之。"
      }, {
        seal: "游山恨不远，剑出挂长虹。"
      }, {
        seal: "清澈光明。"
      }, {
        seal: "少年老梦，和风甘雨。"
      }, {
        seal: "一生低首拜剑仙"
      }, {
        seal: "身后北方，美目盼兮。"
      }, {
        seal: "呦呦鹿鸣，啾啾莺飞，依依不舍。"
      }, {
        seal: "天下此处剑气最长。"
      }, {
        seal: "不敢仗剑登城头，唯恐逐退三轮月。"
      }, {
        seal: "日以煜乎昼，月以煜乎夜。"
      }, {
        seal: "观道观道观道。"
      }, {
        seal: "花月团圆，神仙眷侣。"
      }, {
        seal: "人间有女美姿容，羞走天上三盏灯。"
      }, {
        seal: "青丝染霜雪，依旧是美人。"
      }, {
        seal: "并无山水形胜地，却是人间最高城。"
      }, {
        seal: "稚童嬉闹处，剑仙豪饮时。"
      }, {
        seal: "霜降橘柿三百枚。"
      }, {
        seal: "风摧我不动，幡不动心不动。"
      }, {
        seal: "金风玉露，春草青山，两两相宜。"
      }, {
        seal: "白鹭昼立雪，墨砚夜无灯。"
      }, {
        seal: "城头何人，竟然无忧。"
      }, {
        seal: "髻挽人间最多云。"
      }, {
        seal: "雁撞墙。"
      }, {
        seal: "鱼化龙。"
      }, {
        seal: "求醉耶，勿醉也。"
      }, {
        seal: "花草葱葱。"
      }, {
        seal: "登城如上坟，出剑即祭酒。"
      }, {
        seal: "歇于雁荡山大龙湫，及三更梦中，星火满天，喜不成寐，赤足跳入草莽中。"
      }, {
        seal: "再来剑仙三百，蛮荒处处皆浩然"
      }
      ],
      pairedSeal: [{
        leftSeal: "稽首天外天；",
        rightSeal: "道法照大千。"
      }, {
        leftSeal: "慷慨去也；",
        rightSeal: "浩然归也。"
      }, {
        leftSeal: "为君倒满一杯酒；",
        rightSeal: "日月在君杯中游。"
      }],
      specialSeal: [
        {
          seal: "原来是君子。",
          inscription: "道路泥泞人委顿，豪杰斫贼书不载。真正名士不风流，大石磊落列天际。"
        }, {
          seal: "喝酒去。",
          inscription: "世间人事无意外，争名夺利忙不休，教俺这江湖老子白眼看。"
        }, {
          seal: "愁煞光棍汉。",
          inscription: "自古诗家词客，恨不得打杀一个情字，唯我只恨情愁不登门，喝他娘的酒，怒从胆边生，一棍砸在书，打烂婉约词。"
        }, {
          seal: "如何是好。",
          inscription: "没钱剑仙无酒可醉，婀娜佳人突然有秋膘。"
        }, {
          seal: "",
          inscription: "幽幽阶下苔，王孙把扇摇。焦黄井边蔬，涕泗滂沱流。（已被陈平安捏碎）"
        }, {
          seal: "",
          inscription: "蹇驴破帽旧衣，青山绿水老路，朝露晚霞星河，灯火花瓯佳人。"
        }, {
          seal: "",
          inscription: "世间人事无意外。"
        }, {
          seal: "不小心。",
          inscription: "故人更是佳人，慷慨多奇节。少年心有一峰，忽被云偷去。"
        }, {
          seal: "搬山倒海。",
          inscription: "大剑仙陈平安第一印，兄长刘羡阳惠存。"
        }
      ],
      otherSeal: [{
        seal: "先生独坐，春风翻书。",
        who: "曹晴朗赠陈平安"
      }, {
        seal: "女子武神，陈曹身边。",
        inscription: "石在溪涧，如何不是中流砥柱。绮云在天，拳犹然在那天上天。",
        who: "崔东山赠郁狷夫"
      }],
      title1: '百剑仙印谱',
      title2: '皕剑仙印谱',
      title3: '成对剑仙印谱',
      title4: '特殊印谱'

    }
  },
  mounted () { },
  methods: {}
}
</script>

<style scoped>
</style>