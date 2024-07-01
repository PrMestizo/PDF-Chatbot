import os
from dotenv import load_dotenv
from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import CharacterTextSplitter
from langchain_openai import OpenAIEmbeddings
from langchain_pinecone import PineconeVectorStore

load_dotenv()

def preprocess_and_store_embeddings():
    pdf_directory = "Data"
    documents = []

    for filename in os.listdir(pdf_directory):
        if filename.endswith(".pdf"):
            file_path = os.path.join(pdf_directory, filename)
            loader = PyPDFLoader(file_path=file_path)
            documents.extend(loader.load())

    text_splitters = CharacterTextSplitter(chunk_size=1000, chunk_overlap=30, separator="\n")
    docs = text_splitters.split_documents(documents=documents)

    embeddings = OpenAIEmbeddings()

    vectorstore = PineconeVectorStore(
        index_name=os.environ["INDEX_NAME"], embedding=embeddings
    )
    vectorstore.store_documents(docs)

if __name__ == "__main__":
    preprocess_and_store_embeddings()
