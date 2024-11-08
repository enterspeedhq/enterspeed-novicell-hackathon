using Enterspeed.Source.UmbracoCms.Base.DataPropertyValueConverters;
using Umbraco.Cms.Core.Composing;

namespace NovicellHackathon.PropertyValueConverters;

public class PropertyValueConverterComposer : IComposer
{
    public void Compose(IUmbracoBuilder builder)
    {
        builder.EnterspeedPropertyValueConverters()
            .Append<RichTextEditorPropertyValueConverter>();
    }
}