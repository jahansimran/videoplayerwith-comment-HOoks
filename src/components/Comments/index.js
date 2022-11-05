import {useState} from 'react'
import {v4} from 'uuid'
import CommentItem from '../CommentItem'
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setCommentTxt] = useState('')
  const [commentList, setCommentList] = useState([])

  const onChangeName = event => {
    setName(event.target.value)
  }

  const onChangeCommentTxt = event => {
    setCommentTxt(event.target.value)
  }

  const onSubmitForm = event => {
    event.preventDefault()
    const newComment = {
      id: v4(),
      name,
      commentText,
    }
    setName('')
    setCommentTxt('')
    setCommentList(prevState => [...prevState, newComment])
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onSubmitForm}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onChangeName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={commentText}
          onChange={onChangeCommentTxt}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList>
        {commentList.map(each => (
          <CommentItem commentDetails={each} key={each.id} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
