export const findBook = (books, bookId) =>
books.find(book => book.id === bookId)

export const findChapter = (chapters, chapterId) =>
chapters.find(chapter => chapter.id === chapterId)

export const findVerse = (verses, chapterId) =>
verses.find(verse => verse.chapterId === chapterId)

export const findChaptersinBook = (chapters, bookId) =>
chapters.find(chapter => chapter.bookId === bookId)

export const findPlanTitle = (plantitles, plantitleId) =>
plantitles.find(plantitle => plantitle.id === plantitleId);

export const findPlan = (plans, planId) =>
plans.find(plan => plan.id === planId);