function ContentPage({page}: {
  page: Page
}) {
  const contentPage = page as ContentPage;

  return (
      <div>
        <h1>{contentPage.headline}</h1>
        <div dangerouslySetInnerHTML={{ __html: contentPage.content }} />
      </div>
  );
}

export default ContentPage;
