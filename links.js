var links = ["https://arazim-project.com/"] // add more links

function main_links(message, number)
{
    var res = "";
    for (link in links)
    {
        res = res + link + "\n"
    }
    return res;
}

// function get_link(link_index)
// {
//     if (! (0 <= link_index < links.length) )
//     {
//         return "Bad link index!";
//     }
// }