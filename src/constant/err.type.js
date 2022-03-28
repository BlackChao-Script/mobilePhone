module.exports = {
  // 用户错误
  userFormateError: {
    code: '10001',
    message: '用户名或密码为空',
    result: '',
  },
  userAlreadyExited: {
    code: '10002',
    message: '用户名已存在',
    result: '',
  },
  userRegisterError: {
    code: '10003',
    message: '获取用户信息错误',
    result: '',
  },
  userNotExistence: {
    code: '10004',
    message: '用户名不存在',
    result: '',
  },
  invalidPassword: {
    code: '10005',
    message: '密码错误',
    result: '',
  },
  userLoginError: {
    code: '10006',
    message: '用户登录失败',
    result: '',
  },
  updatePassowrdError: {
    code: '10007',
    message: '修改密码失败',
    result: '',
  },
  getUserNumError: {
    code: '10008',
    message: '获取用户数量失败',
    result: '',
  },
  getUserInfoError: {
    code: '10009',
    message: '获取用户信息失败',
    result: '',
  },
  // 权限错误
  TokenExpiredError: {
    code: '10010',
    message: 'token已过期',
    result: '',
  },
  invalidToken: {
    code: '10011',
    message: 'token无效',
    result: '',
  },
  hadAdminPermissionError: {
    code: '10012',
    message: '没有管理员权限',
    result: '',
  },
  // 上传错误
  fileUploadError: {
    code: '10013',
    message: '上传失败',
    result: '',
  },
  fileUploadTypeError: {
    code: '10014',
    message: '不支持该格式的文件',
    result: '',
  },
  // 商品
  validatorGoodsError: {
    code: '10020',
    message: '商品参数格式错误',
    result: '',
  },
  createGoodsError: {
    codee: '10021',
    message: '创建商品数据失败',
    result: '',
  },
  modifyGoodslId: {
    code: '10022',
    message: '无效商品',
    result: '',
  },
  modifyGoodsError: {
    code: '10023',
    message: '修改商品失败',
    result: '',
  },
  goodsoffGoodsError: {
    code: '10024',
    message: '下架商品失败',
    result: '',
  },
  goodsonGoodsError: {
    code: '10025',
    message: '上架商品失败',
    result: '',
  },
  goodsListError: {
    code: '10026',
    message: '获取商品列表失败',
    result: '',
  },
  getGoodsNumberError: {
    code: '10027',
    messageL: '获取商品数量失败',
    result: '',
  },
  // 轮播图错误
  validatorCarouselError: {
    code: '10030',
    message: '轮播图参数格式错误',
    result: '',
  },
  createcarouselError: {
    code: '10031',
    message: '创建轮播图失败',
    result: '',
  },
  modifyCarouselError: {
    code: '10032',
    message: '修改轮播图失败',
    result: '',
  },
  modifyCarouselId: {
    code: '10033',
    message: '无效轮播图',
    result: '',
  },
  getCarouselError: {
    code: '10034',
    message: '获取轮播图列表失败',
    result: '',
  },
  // 购物车错误
  validatorCartError: {
    code: '10040',
    message: '购物车参数格式错误',
    result: '',
  },
  addCartError: {
    code: '10041',
    message: '添加购物车失败',
    result: '',
  },
  getCartError: {
    code: '10042',
    message: '获取购物车列表失败',
    result: '',
  },
  updateCartError: {
    code: '10043',
    message: '更新购物车失败',
    result: '',
  },
  updateCartBodyUnd: {
    code: '10044',
    message: 'number与selected不能同时为空',
    result: '',
  },
  deleteCartError: {
    code: '10045',
    message: '删除购物车失败',
    result: '',
  },
  selectAllCartError: {
    code: '10046',
    message: '',
    result: '',
  },
  // 地址错误
  validatorAddressError: {
    code: '10050',
    message: '地址参数格式错误',
    result: '',
  },
  addtoaddressError: {
    code: '10051',
    message: '添加地址失败',
    result: '',
  },
  getAddressError: {
    code: '10052',
    message: '获取地址列表失败',
    result: '',
  },
  modifyAddressError: {
    code: '10053',
    message: '修改地址列表失败',
    result: '',
  },
  deleteAddressError: {
    code: '10054',
    message: '删除地址失败',
    result: '',
  },
  isDefaultError: {
    code: '10055',
    message: '设为默认地址失败',
    result: '',
  },
  // 订单错误
  validatorOrder: {
    code: '10060',
    message: '校验订单格式错误',
    result: '',
  },
  createOrderError: {
    code: '10061',
    message: '生成订单失败',
    result: '',
  },
  getOrderError: {
    code: '10062',
    message: '获取订单列表失败',
    result: '',
  },
  updateOrderError: {
    code: '10063',
    message: '更新订单状态失败',
    result: '',
  },
  getOrderNumError: {
    code: '10064',
    message: '获取订单数量失败',
    result: '',
  },
  // 分类错误
  validatorSortError: {
    code: '10064',
    message: '分类数据参数错误',
    result: '',
  },
  addSortError: {
    code: '10065',
    message: '添加分类数据失败',
    result: '',
  },
  modifySortError: {
    code: '10066',
    message: '修改分类数据失败',
    result: '',
  },
  deleteSortError: {
    code: '10067',
    message: '删除分类失败',
    result: '',
  },
  getSortError: {
    code: '10068',
    message: '获取分类列表失败',
    result: '',
  },
  getSortDataError: {
    code: '10069',
    message: '获取分类详细失败',
    result: '',
  },
  // todo错误
  validatorTodoError: {
    code: '10070',
    message: 'todo数据参数错误',
    result: '',
  },
  addTodoError: {
    code: '10071',
    message: '添加todo失败',
    result: '',
  },
  getTodoError: {
    code: '10072',
    message: '获取todo失败',
    result: '',
  },
  deletetTodoError: {
    code: '10073',
    message: '删除todo失败',
    result: '',
  },
  patchTodoError: {
    code: '10074',
    message: '',
    result: '',
  },
}
