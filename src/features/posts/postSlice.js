import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
  {
    id: '1',
    title: 'Going to Bed',
    content: 'I should have gone to be by 10'
  },
  {
    id: '2',
    title: 'Drafting My todo List for the Next Day',
    content: 'Write a detailed to-do list for the next day before I retire to bed'
  }

]

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)

      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId

          }

        }

      }
    }
  },
})

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postSlice.actions;

export default postSlice.reducer;

