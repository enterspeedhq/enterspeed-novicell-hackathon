using Enterspeed.Source.Sdk.Api.Models.Properties;
using Enterspeed.Source.UmbracoCms.Base.Services.DataProperties;
using Enterspeed.Source.UmbracoCms.Base.Services;
using Umbraco.Cms.Core.Models.PublishedContent;
using Enterspeed.Source.UmbracoCms.Base.Extensions;

namespace NovicellHackathon.PropertyValueConverters;

public class RichTextEditorPropertyValueConverter(IUmbracoRichTextParser umbracoRichTextParser, IEnterspeedConfigurationService enterspeedConfigurationService) : IEnterspeedPropertyValueConverter
{
    public bool IsConverter(IPublishedPropertyType propertyType)
    {
        return propertyType.EditorAlias.Equals("Umbraco.RichText");
    }

    public virtual IEnterspeedProperty Convert(IPublishedProperty property, string culture)
    {
        var value = property.GetValue<Umbraco.Cms.Core.Strings.HtmlEncodedString>(culture).ToString();
        value = umbracoRichTextParser.PrefixRelativeImagesWithDomain(value, enterspeedConfigurationService.GetConfiguration().MediaDomain);
        return new StringEnterspeedProperty(property.Alias, value);
    }
}