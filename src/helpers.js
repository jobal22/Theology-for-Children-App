export const findBook = (books=[], bookId) =>
books.find(book => book.id = bookId)

export const findChapter = (chapters=[], chapterId) =>
chapters.find(chapter => chapter.id = chapterId)

export const findVerse = (verses=[], chapterId) =>
verses.find(verse => verse.chapterId == chapterId)
