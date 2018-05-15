<script>
  $.ajax({
    type: "method",
    url: "url",
    data: "data",
    dataType: "dataType",
    success: function (res) {
      if (res.meta === 200) {
        // 加载广东省
        $.ajax({
          type: "method",
          url: "url",
          data: "data",
          dataType: "dataType",
          success: function (res) {
            if(res.meta === 200){
              // 加载市
              $.ajax({
                type: "method",
                url: "url",
                data: "data",
                dataType: "dataType",
                success: function (res) {
                  if (res.meta === 200) {
                    // 加载区
                  }
                }
              })
            }
          }
        })
      }
    }
  })
// promise 编程式编程
axios.get(obj)
  .then(res => {
    if (res.meta === 200) {
    }
  })
  .then(obj)
  .then()
  .then()

// 链式编程
$().show()


$.ajax({
    type: "method",
    url: "url",
    data: "data",
    dataType: "dataType",
    success: function (res) {
      if (res.meta === 200) {
        // 加载广东省
        return {}
        })
      }
  }).ajax()



</script>
