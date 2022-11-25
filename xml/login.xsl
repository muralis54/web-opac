<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
    <html>
    <body>
        <h2>login</h2>
        <table>
            <tr>
                <th>Email</th>
                <th>Password</th>
            </tr>
            <xsl:for-each select="login/user">
                <tr>
                    <td><xsl:value-of select="email"/></td>
                    <td><xsl:value-of select="password"/></td>
                </tr>
            </xsl:for-each>
        </table>
    </body>
    </html>

</xsl:template>
</xsl:stylesheet>