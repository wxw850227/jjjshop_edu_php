import request from '@/utils/request'

let CommentApi = {
  /*评论列表*/
  getCommentList(data, errorback) {
      return request._post('/shop/comment.comment/index', data, errorback);
  },
  /*获取评论详情*/
  getComment(data, errorback) {
      return request._post('/shop/comment.comment/detail', data, errorback);
  },
  /*获取评论详情*/
  editComment(data, errorback) {
      return request._post('/shop/comment.comment/edit', data, errorback);
  },
  /*删除评论*/
  delComment(data, errorback) {
      return request._post('/shop/comment.comment/delete', data, errorback);
  },
}

export default CommentApi;
