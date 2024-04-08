const booksData = [
  {
    "id": 1,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "published_date": "July 11, 1960",
    "genre": ["Fiction", "Southern Gothic", "Bildungsroman"],
    "description": "To Kill a Mockingbird is a novel by Harper Lee published in 1960. It is set in the fictional town of Maycomb, Alabama, during the Great Depression. The story is narrated by a young girl named Scout Finch, who lives with her older brother Jem and their widowed father Atticus. The novel explores the irrationality of adult attitudes towards race and class in the Deep South of the 1930s. It is renowned for its warmth and humor, despite dealing with serious issues such as racial inequality and rape.",
    "imageUrl": "https://www.telegraph.co.uk/content/dam/news/2018/09/08/TELEMMGLPICT000173563791_1_trans_NvBQzQNjv4BqqJmO2fTnKlKM9Wq_xXiqzL26_3oDqRyOf0qYm9Qf9Gs.jpeg"
  },
  {
    "id": 2,
    "title": "1984",
    "author": "George Orwell",
    "published_date": "June 8, 1949",
    "genre": ["Dystopian Fiction", "Political Fiction"],
    "description": "1984 is a dystopian novel by George Orwell published in 1949. It is set in a totalitarian society ruled by the Party, led by the enigmatic figure Big Brother. The protagonist, Winston Smith, works for the Party rewriting historical records to fit its propaganda. As Winston begins to question the Party's control over reality, he embarks on a journey of rebellion and self-discovery. The novel explores themes of surveillance, propaganda, and the erosion of individual freedom. It has had a profound influence on contemporary literature and popular culture, coining terms such as 'Big Brother' and 'Orwellian'.",
    "imageUrl": "https://studybreaks.com/wp-content/uploads/2023/09/2.jpg"
  },
  {
    "id": 3,
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "published_date": "July 16, 1951",
    "genre": ["Bildungsroman", "Coming-of-Age Fiction"],
    "description": "The Catcher in the Rye is a novel by J.D. Salinger published in 1951. It follows the story of Holden Caulfield, a disaffected teenager who has been expelled from his prep school. Over the course of three days, Holden wanders the streets of New York City, grappling with themes of identity, alienation, and innocence. The novel is renowned for its colloquial language and its exploration of the teenage experience. It has been both celebrated and criticized for its portrayal of adolescent angst and rebellion. Despite controversy, it remains one of the most influential works of American literature.",
    "imageUrl": "https://cdn.britannica.com/94/181394-050-2F76F7EE/Reproduction-cover-edition-The-Catcher-in-the.jpg?w=300&h=169&c=crop"
  },
  {
    "id": 4,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "published_date": "April 10, 1925",
    "genre": ["Literary Fiction", "Tragedy", "Jazz Age"],
    "description": "The Great Gatsby is a novel by F. Scott Fitzgerald published in 1925. Set in the summer of 1922, the story follows the young and mysterious millionaire Jay Gatsby as he pursues the elusive Daisy Buchanan. Through the eyes of narrator Nick Carraway, the novel explores themes of love, wealth, and the American Dream. It is renowned for its vivid depiction of the Jazz Age and its critique of the excesses of the Roaring Twenties. The character of Gatsby has become a symbol of the pursuit of the American Dream, while the novel itself is considered a masterpiece of American literature.",
    "imageUrl": "https://cdn.britannica.com/31/213831-050-D073CF0A/movie-still-Robert-Redford-The-Great-Gatsby-1974.jpg"
  },
  {
    "id": 5,
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "published_date": "January 28, 1813",
    "genre": ["Romance", "Comedy of Manners", "Satire"],
    "description": "Pride and Prejudice is a novel by Jane Austen published in 1813. It follows the story of Elizabeth Bennet, a spirited young woman in Georgian England, as she navigates the pitfalls of love and society. The novel is renowned for its wit, satire, and keen observations of human nature. It explores themes of marriage, social class, and gender roles in a society governed by strict etiquette and decorum. Elizabeth's romance with the enigmatic Mr. Darcy has become one of the most iconic love stories in literature, captivating readers for over two centuries.",
    "imageUrl": "https://cdn.britannica.com/06/213606-050-50B74011/Publicity-still-Colin-Firth-Jennifer-Ehle-Pride-and-Prejudice-1995.jpg"
  },
  {
    "id": 6,
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "published_date": "September 21, 1937",
    "genre": ["Fantasy", "Adventure"],
    "description": "The Hobbit is a fantasy novel by J.R.R. Tolkien published in 1937. It follows the journey of Bilbo Baggins, a hobbit who is recruited by the wizard Gandalf to join a quest to reclaim the treasure hoard of the dragon Smaug. Along the way, Bilbo encounters trolls, goblins, elves, and other fantastical creatures. The novel is renowned for its richly imagined world, intricate mythology, and memorable characters. It has been adapted into various forms of media, including films, radio dramas, and video games. The Hobbit is considered a classic of children's literature and a precursor to Tolkien's epic masterpiece, The Lord of the Rings.",
    "imageUrl": "https://i0.wp.com/princetonbuffer.princeton.edu/wp-content/uploads/sites/185/2015/02/The-Hobbit.jpg?resize=672%2C372&ssl=1"
  },
  {
    "id": 7,
    "title": "The Story of Fairytale",
    "author": "Various",
    "published_date": "Various",
    "genre": ["Fairy Tale", "Fantasy"],
    "description": "The Story of Fairytale is a collection of various fairy tales, myths, and legends from around the world. These timeless stories have been passed down through generations, enchanting readers with their magic, adventure, and wisdom. From the Brothers Grimm to Hans Christian Andersen, from Greek mythology to Arabian Nights, this anthology celebrates the diversity and universality of the fairy tale genre. Each tale offers a glimpse into different cultures, beliefs, and traditions, while exploring timeless themes such as love, courage, and the triumph of good over evil.",
    "imageUrl": "https://cdn5.vectorstock.com/i/1000x1000/41/69/story-book-with-cartoon-princesses-and-princes-vector-22534169.jpg"
  },
  {
    "id": 8,
    "title": "The Jungle Book",
    "author": "Rudyard Kipling",
    "published_date": "1894 (Original stories published in magazines between 1893-1894)",
    "genre": ["Children's Literature", "Adventure", "Animal Fiction"],
    "description": "The Jungle Book is a collection of stories by Rudyard Kipling published in 1894. Originally serialized in magazines between 1893 and 1894, the stories are set in the jungles of India and feature a cast of anthropomorphic animals. The most famous of these stories is the tale of Mowgli, a young boy raised by wolves who must navigate the dangers of the jungle and confront his nemesis, the tiger Shere Khan. The Jungle Book explores themes of identity, belonging, and the balance between civilization and the wild. It has been adapted into numerous films, television series, and stage productions, captivating audiences of all ages with its timeless charm and adventure.",
    "imageUrl": "https://5.imimg.com/data5/SELLER/Default/2021/2/SA/IQ/HS/49559104/img-20210211-121925-500x500.jpg"
  }
]

  

  export default booksData;




// 1. **To Kill a Mockingbird**
//    - **Author:** Harper Lee
//    - **Published Date:** July 11, 1960
//    - **Genre:** Fiction, Southern Gothic, Bildungsroman
//    - **Description:** "To Kill a Mockingbird" is Harper Lee's classic novel set in the fictional town of Maycomb, Alabama during the 1930s. The story follows young Scout Finch, her brother Jem, and their father Atticus Finch, a lawyer, as they navigate issues of racial injustice and morality in their community. Through Scout's innocent perspective, the novel explores themes of empathy, compassion, and the complexities of human nature.

// 2. **1984**
//    - **Author:** George Orwell
//    - **Published Date:** June 8, 1949
//    - **Genre:** Dystopian Fiction, Political Fiction
//    - **Description:** George Orwell's "1984" is a dystopian masterpiece set in a totalitarian society ruled by the Party and its enigmatic leader, Big Brother. The novel follows Winston Smith, a low-ranking member of the Party, as he rebels against the oppressive regime and seeks freedom of thought and expression. "1984" explores themes of surveillance, propaganda, and the erosion of individual autonomy, offering a chilling warning about the dangers of authoritarianism.

// 3. **The Catcher in the Rye**
//    - **Author:** J.D. Salinger
//    - **Published Date:** July 16, 1951
//    - **Genre:** Bildungsroman, Coming-of-Age Fiction
//    - **Description:** "The Catcher in the Rye" is a coming-of-age novel narrated by Holden Caulfield, a disaffected teenager who has recently been expelled from prep school. Over the course of a few days in New York City, Holden grapples with feelings of alienation, disillusionment, and a yearning for authenticity in a world he perceives as phony. J.D. Salinger's iconic novel captures the angst and confusion of adolescence with sharp wit and poignant insight.

// 4. **The Great Gatsby**
//    - **Author:** F. Scott Fitzgerald
//    - **Published Date:** April 10, 1925
//    - **Genre:** Literary Fiction, Tragedy, Jazz Age
//    - **Description:** Set in the lavish world of 1920s Long Island, "The Great Gatsby" is a tale of love, wealth, and the American Dream. Narrated by Nick Carraway, the novel follows the enigmatic Jay Gatsby, a self-made millionaire with a mysterious past, as he pursues his obsession with the beautiful Daisy Buchanan. F. Scott Fitzgerald's evocative prose paints a vivid portrait of the Jazz Age while exploring themes of social class, identity, and the corrupting influence of materialism.

// 5. **Pride and Prejudice**
//    - **Author:** Jane Austen
//    - **Published Date:** January 28, 1813
//    - **Genre:** Romance, Comedy of Manners, Satire
//    - **Description:** "Pride and Prejudice" is Jane Austen's beloved romantic comedy set in the English countryside during the early 19th century. The novel follows the spirited Elizabeth Bennet as she navigates the complexities of love, marriage, and societal expectations. Along the way, she encounters the enigmatic Mr. Darcy, whose pride and Elizabeth's prejudice initially lead to misunderstandings and misgivings. Through Austen's sharp wit and keen observations, "Pride and Prejudice" offers a timeless exploration of love, reputation, and the power of first impressions.

// 6. **The Hobbit**
//    - **Author:** J.R.R. Tolkien
//    - **Published Date:** September 21, 1937
//    - **Genre:** Fantasy, Adventure
//    - **Description:** "The Hobbit" is a fantasy adventure novel by J.R.R. Tolkien, set in a mythical world populated by elves, dwarves, wizards, and hobbits. The story follows Bilbo Baggins, a hobbit who is unexpectedly swept into an epic quest to reclaim the lost kingdom of Erebor from the fearsome dragon Smaug. Along the way, Bilbo encounters trolls, goblins, and a mysterious creature named Gollum, testing his courage and resourcefulness. "The Hobbit" is a timeless tale of heroism, friendship, and the power of unlikely heroes.

// 7. **The Story of Fairytale**
//    - **Author:** Unknown (Various)
//    - **Published Date:** Various
//    - **Genre:** Fairy Tale, Fantasy
//    - **Description:** "The Story of Fairytale" is a collection of timeless tales passed down through generations, featuring magical creatures, enchanted forests, and daring adventures. From classic tales like "Cinderella" and "Sleeping Beauty" to lesser-known gems like "The Snow Queen" and "The Little Mermaid," fairy tales have captivated readers of all ages with their enduring themes of love, bravery, and the triumph of good over evil. Whether exploring far-off kingdoms or confronting wicked witches, these enchanting

//  stories continue to inspire wonder and imagination.

// 8. **The Jungle Book**
//    - **Author:** Rudyard Kipling
//    - **Published Date:** 1894 (Original stories published in magazines between 1893-1894)
//    - **Genre:** Children's Literature, Adventure, Animal Fiction
//    - **Description:** "The Jungle Book" is a collection of stories by Rudyard Kipling, set in the lush jungles of India and featuring a cast of memorable animal characters. From Mowgli, the man-cub raised by wolves, to Bagheera the black panther and Baloo the bear, each story follows the adventures and challenges faced by these jungle inhabitants. Filled with themes of friendship, loyalty, and the laws of the wild, "The Jungle Book" remains a beloved classic of children's literature, captivating readers with its timeless charm and vivid storytelling.