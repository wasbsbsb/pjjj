<template>
  <div class="NavLink">
    <div class="linkTO" v-for="item in HeaderLink" :key="item.name">
      <div @click="onClick($event)">
        <router-link class="linkToA" :to="item.linkPath" v-text="item.name"></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavLink",
  data: function() {
    return {
      HeaderLink: [
        {
          name: "首页",
          linkPath: "/"
        },
        {
          name: "分类",
          linkPath: "/Classify"
        },
        {
          name: "排行",
          linkPath: "/Seniority"
        },
        {
          name: "书架",
          linkPath: "/Bookrack"
        }
      ],
      active: ""
    };
  },

  methods: {
    onClick(e) {
      window.console.log(e);

      window.console.log(this.HeaderLink);
    }
  },

  props: {}
};
</script>

<style scoped>
.NavLink {
  height: 40px;
  display: flex;
}

.linkTO {
  flex: 1;
  text-align: center;
  color: aliceblue;
  background: #333;
  line-height: 40px;
}

.linkToA {
  color: aliceblue;
  text-decoration: none;
}
</style>
